

export const TesseractStylizerPresets = {
    default: {
      accessibility: {}
    },
    disabled: {
      base: (): string => "not-sr-only",
      sm: (): string => "sr-only",
      md: (): string => "sr-only",
      lg: (): string => "sr-only",
      xl: (): string => "sr-only",
    },
    custom: {
      base: (overrides: { className: any }) => `${overrides.className}`,
      sm: (): string => "sr-only",
      md: (): string => "sr-only",
      lg: (): string => "sr-only",
      xl: (): string => "sr-only",
    },
  } as const;
  
  export const TesseractAccessibilityPreset = {
    screenReader: TesseractScreenReaderPreset,
  } as const;
  
  
  export type TesseractAccessibilityPresetType = Partial<typeof TesseractAccessibilityPreset>