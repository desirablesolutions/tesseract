import { defineStylizer } from "..";
import {
  TesseractBackgroundColorPreset,
  TesseractBackgroundColorBaseParameters,
} from "./presets";

export function backgroundColor({
  preset,
  sx,
}: {
  preset: string;
  sx: TesseractBackgroundColorBaseParameters;
}) {
  return defineStylizer({
    preset:
      TesseractBackgroundColorPreset[
        preset as keyof typeof TesseractBackgroundColorPreset
      ],
    overrides: sx,
  });
}


const myGreen = backgroundColor({
  preset: "green",
  sx:{
    intensity: 9
  }
})