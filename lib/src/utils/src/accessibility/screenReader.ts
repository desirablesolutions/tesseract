import {
  PresetType,
  TesseractScreenReaderPreset,
  TesseractScreenReaderPresetType,
  defineStylizer,
} from "..";

export type ScreenReaderProps = {
  preset: keyof TesseractScreenReaderPresetType;
  sx?: Parameters<(typeof TesseractScreenReaderPreset)["custom"]["base"]>[0];
};

export function screenReader({ preset, sx }: ScreenReaderProps) {


  const presetLoad: PresetType = TesseractScreenReaderPreset as PresetType;

  return defineStylizer<ScreenReaderProps>({
    preset: presetLoad[preset as keyof typeof presetLoad],
    overrides: sx,
  });
}

const test = screenReader({
  base: {
    preset: "disabled"
  },
  md: {
    preset: "custom",
    sx: {
      className: "tableto"
    }
  },
  sm: {
    preset: "default"
  },
  hover: {
    preset:"disabled"
  }
})