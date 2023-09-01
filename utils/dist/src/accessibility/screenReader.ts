import { defineStylizer, TesseractScreenReaderPresetType } from "..";
import { TesseractScreenReaderPreset } from "./presets";



export type PresetTypeNames = "default"

export function screenReader({
  preset
}: {
  preset?:PresetTypeNames
}) {
  return defineStylizer({
    preset:
      TesseractScreenReaderPreset[
        preset as keyof typeof TesseractScreenReaderPreset ?? "default"
      ],
  });
}



