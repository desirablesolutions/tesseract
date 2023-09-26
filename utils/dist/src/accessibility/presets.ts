import type { PresetType } from "..";

export const TesseractScreenReaderPreset = {
  default: {
    base: (): string => "sr-only",
  },
  disabled: {
    base: (): string => "not-sr-only",
  },
  custom: {
    base: (overrides:any) => `${overrides.className}`
  }
} as const;

export const TesseractAccessibilityPreset = {
  screenReader: TesseractScreenReaderPreset,
} as const;


