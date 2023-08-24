import { TesseractBackgroundImagePresets, TesseractGradientColorStopsPresets } from "./presets";
export type PresetType = {
    base: string;
    sm?: string;
    md: string;
    lg: string;
    xl: string;
    dark?: string;
};
export type TesseractBackgroundImagePresetsType = typeof TesseractBackgroundImagePresets;
export type TesseractGradientColorStopsPresetsType = typeof TesseractGradientColorStopsPresets;
