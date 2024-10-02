import { writable } from "svelte/store"

export const isRunning = writable(false)
export const steps = writable(0)
