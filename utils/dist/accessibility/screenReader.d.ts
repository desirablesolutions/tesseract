import { TesseractScreenReaderPreset } from "./presets";
export type ScreenReaderProps = {
    preset: keyof typeof TesseractScreenReaderPreset;
    sx?: any;
};
export declare function screenReader({ preset, sx }: ScreenReaderProps): import("blakprint").Definition<any, string, Error>;
