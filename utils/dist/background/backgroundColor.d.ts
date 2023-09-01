import { TesseractBackgroundColorBaseParameters } from "./presets";
export declare function backgroundColor({ preset, sx, }: {
    preset: string;
    sx: TesseractBackgroundColorBaseParameters;
}): import("blakprint").Definition<{
    intensity: number;
}, string, Error>;
