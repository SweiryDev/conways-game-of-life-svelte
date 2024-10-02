<script lang="ts">
    import Grid from "$lib/Grid.svelte"
    import FloatingMenu from "$lib/FloatingMenu.svelte"

    let gridComponent: Grid

    let gridSize = 100
    let cellSize = 3/5

    function handleStart(){
        gridComponent.startSimulation()
    }

    function handleStop(){
        gridComponent.stopSimulation()
    }

    function handleReset(){
        gridComponent.resetSimulation()
    }

    function handleSpeed(speed: number){
        gridComponent.updateSpeed(speed)
    }

</script>

<main 
    class="flex justify-center items-center min-h-screen bg-gray-100"
    >
    <Grid {gridSize} {cellSize} bind:this={gridComponent}/>
</main>

<FloatingMenu 
    startSimulation={handleStart}
    stopSimulation={handleStop}
    resetSimulation={handleReset}
    updateSpeed={handleSpeed}
    />