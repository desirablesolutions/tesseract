import { Definition } from "blakprint";
import { TesseractAccessibilityPreset } from "./presets";
export declare function accessibility({ screenReader, }: {
    screenReader?: Record<keyof typeof TesseractAccessibilityPreset["screenReader"], any>;
}): Definition;
