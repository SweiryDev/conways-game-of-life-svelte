<script lang="ts">
    import { onMount } from 'svelte'
    import { isRunning, steps } from './stores.js'

    export let gridSize = 30
    export let cellSize = 5
    let grid: boolean[][] = []
    let intervalId: number | null = null

    let mouseDown = false

    export let speed = 200


    export function initializeGrid() {
        grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false))
        $steps = 0
    }

    function toggleCell(row: number, col: number){
        grid[row][col] = !grid[row][col]
        grid = grid // Trigger reactivity!
    }


    function countLiveNeighbors(row: number, col: number): number{
        let count = 0
        for(let i = -1; i <= 1; i++){
            for(let j= -1; j<= 1; j++){
                if(i === 0 && j === 0 ) continue
                const newRow = row + i
                const newCol = col + j
                if(newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize){
                    count += grid[newRow][newCol] ? 1 : 0
                }
            }
        }

        return count
    }

    function nextGeneration(){
        let hasLivingCells = false
        const newGrid = grid.map(row => [...row])
        for(let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                const liveNeighbors = countLiveNeighbors(row, col)
                if(grid[row][col]){
                    // Cell is alive
                    if(liveNeighbors < 2 || liveNeighbors > 3){
                        newGrid[row][col] = false // Kill This Cell!
                    }

                    hasLivingCells = true
                }else{
                    //Cell is dead
                    if (liveNeighbors === 3){
                        newGrid[row][col] = true // Resurrect The Cell!
                    }
                }
            }
        }

        // If there are no living cells there's no point in running the simulation
        if(!hasLivingCells){ 
            stopSimulation()
            return
        }

        grid = newGrid
        $steps++
    }

    export function startSimulation(){
        if(!$isRunning){
            $isRunning = true
            intervalId = setInterval(nextGeneration, speed) // Advence every 200ms
        }
    }

    export function updateSpeed(newSpeed: number){
        speed = newSpeed
        if($isRunning){
            stopSimulation()
            startSimulation()
        }
    }

    export function stopSimulation(){
        if($isRunning && intervalId){
            $isRunning = false
            clearInterval(intervalId)
            intervalId = null
        }

        mouseDown = false
    }

    export function resetSimulation(){
        stopSimulation()
        initializeGrid()
    }



    onMount(() => {
        initializeGrid()
    })

</script>

<div class="inline-block border border-gray-300">
    {#each grid as row, rowIndex }
        <div class="flex">
            {#each row as cell, colIndex}
                <button
                    class={`border border-gray-200 ${cell ? 'bg-cyan-600' : 'bg-white'}`}
                    style="width: {cellSize}em; height: {cellSize}em;"
                    on:click={() => toggleCell(rowIndex, colIndex)}
                    on:mousedown={() => {mouseDown = true}}
                    on:mouseup={() => {mouseDown = false}}
                    on:mouseenter={() => {
                        if(mouseDown && !grid[rowIndex][colIndex])
                            toggleCell(rowIndex, colIndex)
                    }}
                    />
            {/each}
        </div>
    {/each}
</div>

