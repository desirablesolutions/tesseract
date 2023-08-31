import type { PresetType } from "..";
export declare const TesseractScreenReaderPreset: PresetType;
export declare const TesseractAccessibilityPreset: {
    readonly screenReader: {
        [identifier: string]: import("..").BASE_PRESET_TYPE<any>;
        [identifier: symbol]: import("..").BASE_PRESET_TYPE<any>;
        default: import("..").BASE_PRESET_TYPE<any>;
    };
};
export type TesseractScreenReaderPresetType = typeof TesseractScreenReaderPreset;
export type TesseractAccessibilityPresetsType = Record<keyof typeof TesseractAccessibilityPreset, typeof TesseractAccessibilityPreset>;
