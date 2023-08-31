import { defineStylizer } from "..";
import {
  TesseractBackgroundColorPreset,
  TesseractBackgroundColorBaseParameters,
} from "./presets";

export function backgroundColor({
  preset,
  sx,
}: {
  preset: keyof typeof TesseractBackgroundColorPreset;
  sx: TesseractBackgroundColorBaseParameters;
}): any {
  return defineStylizer({
    preset:
      TesseractBackgroundColorPreset[
        preset as keyof typeof TesseractBackgroundColorPreset
      ],
    overrides: sx,
  });
}
