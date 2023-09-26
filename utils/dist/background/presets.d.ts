import type { PresetType } from "..";
export type TesseractBackgroundColorBaseParameters = Parameters<(params: {
    intensity: number;
}) => string>[0];
export declare const TesseractBackgroundColorPreset: PresetType<TesseractBackgroundColorBaseParameters>;
export declare const TesseractBackgroundOpacityPreset: PresetType;
export declare const backgroundAttachment: PresetType;
export declare const TesseractBackgroundPreset: {
    readonly backgroundColor: {
        [identifier: string]: import("..").BASE_PRESET_TYPE<{
            intensity: number;
        }>;
        [identifier: symbol]: import("..").BASE_PRESET_TYPE<{
            intensity: number;
        }>;
        default: import("..").BASE_PRESET_TYPE<any>;
    };
    readonly backgroundOpacity: {
        [identifier: string]: import("..").BASE_PRESET_TYPE<any>;
        [identifier: symbol]: import("..").BASE_PRESET_TYPE<any>;
        default: import("..").BASE_PRESET_TYPE<any>;
    };
};
export type TesseractBackgroundPresetType = Record<keyof typeof TesseractBackgroundPreset, typeof TesseractBackgroundPreset>;
export type TesseractBackgroundColorPresetType = typeof TesseractBackgroundColorPreset;
