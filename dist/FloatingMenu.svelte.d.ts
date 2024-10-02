import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        startSimulation: (() => void);
        stopSimulation: (() => void);
        resetSimulation: (() => void);
        updateSpeed: ((speed: number) => void);
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FloatingMenuProps = typeof __propDef.props;
export type FloatingMenuEvents = typeof __propDef.events;
export type FloatingMenuSlots = typeof __propDef.slots;
export default class FloatingMenu extends SvelteComponent<FloatingMenuProps, FloatingMenuEvents, FloatingMenuSlots> {
}
export {};
