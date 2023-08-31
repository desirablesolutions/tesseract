import type { PresetType } from "..";

export const TesseractScreenReaderPreset: PresetType =
  {
    default: {
      base: (): string => "sr-only",
    },
    disabled: {
      base: (): string => "not-sr-only",
    },
  } as const;


export const TesseractAccessibilityPreset = {
  screenReader: TesseractScreenReaderPreset,
} as const;


export type TesseractScreenReaderPresetType =
  typeof TesseractScreenReaderPreset;

export type TesseractAccessibilityPresetsType = Record<
  keyof typeof TesseractAccessibilityPreset,
  typeof TesseractAccessibilityPreset
>;
