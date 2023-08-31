import { defineStylizer, TesseractScreenReaderPresetType } from "..";
import { TesseractScreenReaderPreset } from "./presets";

export function screenReader({
  preset,
}: {
  preset?: keyof TesseractScreenReaderPresetType;
}) {
  return defineStylizer({
    preset:
      TesseractScreenReaderPreset[
        preset as keyof typeof TesseractScreenReaderPreset
      ],
  });
}



const screenReaderx = screenReader({
  preset: "",
})