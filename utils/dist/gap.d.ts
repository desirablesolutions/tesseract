export declare const TesseractColumnGapPresets: readonly [{
    readonly base: "gap-0";
}];
export type TesseractColumnSpanPresetsTypes = typeof TesseractColumnGapPresets;
export declare function gap(span: string | number | keyof TesseractColumnSpanPresetsTypes, overload?: TesseractColumnSpanPresetsTypes): string;
