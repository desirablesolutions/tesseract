import { defineStylizer } from "..";
import { TesseractBackgroundColorPreset } from "./presets";

export function backgroundOpacity({
  preset,
  sx,
}: {
  preset: string;
  sx: any;
}): any {
  return defineStylizer({
    preset:
      TesseractBackgroundColorPreset[
        preset as keyof typeof TesseractBackgroundColorPreset
      ],
    overrides: sx,
  });
}
