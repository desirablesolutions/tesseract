import { defineStyleSet } from "..";
import { TesseractBackgroundPreset } from "./presets";

export function background(params: any) {
  return defineStyleSet({
    preset: TesseractBackgroundPreset,
    parameters: params,
  });
}

