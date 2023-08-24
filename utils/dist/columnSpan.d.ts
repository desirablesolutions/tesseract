import type { PresetType } from "./types";
export declare const TesseractColumnSpanPresets: readonly [{
    readonly base: "col-span-0";
    readonly md: "col-span-0";
    readonly lg: "col-span-0";
    readonly xl: "col-span-0";
}, {
    readonly base: "col-span-1";
    readonly md: "col-span-1";
    readonly lg: "col-span-1";
    readonly xl: "col-span-1";
}, {
    readonly base: "col-span-2";
    readonly md: "col-span-2";
    readonly lg: "col-span-2";
    readonly xl: "col-span-2";
}, {
    readonly base: "col-span-3";
    readonly md: "col-span-3";
    readonly lg: "col-span-3";
    readonly xl: "col-span-3";
}, {
    readonly base: "col-span-4";
    readonly md: "col-span-4";
    readonly lg: "col-span-4";
    readonly xl: "col-span-4";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}, {
    readonly base: "col-span-5";
    readonly md: "col-span-5";
    readonly lg: "col-span-5";
    readonly xl: "col-span-5";
}];
export type TesseractColumnSpanPresetsTypes = typeof TesseractColumnSpanPresets;
export declare function columnSpan(span: string | number | keyof TesseractColumnSpanPresetsTypes, overload?: PresetType): string;
