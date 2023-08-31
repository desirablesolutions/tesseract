import { TesseractScreenReaderPresetType } from "..";
export declare function screenReader({ preset, }: {
    preset?: keyof TesseractScreenReaderPresetType;
}): import("blakprint").Definition<unknown, string, Error>;
