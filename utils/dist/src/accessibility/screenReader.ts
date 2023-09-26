import { PresetType, defineStylizer } from "..";
import { TesseractScreenReaderPreset } from "./presets";

export type ScreenReaderProps = {
  preset: keyof typeof TesseractScreenReaderPreset;
  sx?: any;
};

export function screenReader({ preset, sx }: ScreenReaderProps) {
  const presetLoad: PresetType = TesseractScreenReaderPreset as PresetType;
  return defineStylizer<any>({
    preset: presetLoad[preset as keyof typeof presetLoad],
    overrides: sx,
  });
}
