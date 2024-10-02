<script>import { isRunning, steps } from "./stores.js";
export let startSimulation;
export let stopSimulation;
export let resetSimulation;
export let updateSpeed;
let visible = false;
let speed = 200;
function handleSpeedChange(event) {
  const newSpeed = parseInt(event.target.value);
  updateSpeed(newSpeed);
}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg {visible ? "opacity-100" : "opacity-60"}"
    on:mouseenter={() => {visible = true}}
    on:mouseleave={() => {visible = false}}
    >
    <div class="space-x-2 object-center flex items-center">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" on:click={startSimulation} >Start</button>
        <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" on:click={stopSimulation}>Stop</button>
        <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" on:click={resetSimulation}>Reset</button>
        <div class={`w-4 h-4 rounded-full ${$isRunning ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span class="truncate text-center">{$steps} Steps</span>
    </div>
    <div class="flex items-center mt-3">
        <span class="mr-2">Speed:</span>
        <input type="range" min="10" max="300" step="10" bind:value={speed} on:change={handleSpeedChange} class="w-full" />
        <span class="ml-2 pr-3">{speed}ms</span>
    </div>
</div>