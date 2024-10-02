import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        gridSize?: number;
        cellSize?: number;
        speed?: number;
        initializeGrid?: () => void;
        startSimulation?: () => void;
        updateSpeed?: (newSpeed: number) => void;
        stopSimulation?: () => void;
        resetSimulation?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
export default class Grid extends SvelteComponent<GridProps, GridEvents, GridSlots> {
    get initializeGrid(): () => void;
    get startSimulation(): () => void;
    get updateSpeed(): (newSpeed: number) => void;
    get stopSimulation(): () => void;
    get resetSimulation(): () => void;
}
export {};
