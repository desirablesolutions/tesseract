export const TesseractScreenReaderPreset = {
  default: {
    base: (): string => "sr-only",
    sm: (): string => "sr-only",
    md: (): string => "sr-only",
    lg: (): string => "sr-only",
    xl: (): string => "sr-only",
  },
  disabled: {
    base: (): string => "not-sr-only",
    sm: (): string => "sr-only",
    md: (): string => "sr-only",
    lg: (): string => "sr-only",
    xl: (): string => "sr-only",
  },
  custom: {
    base: ({ className }: { className: string }) => `${className}`,
    sm: ({ className }: { className: string }) => `${className}`,
    md: ({ className }: { className: string }) => `${className}`,
    lg: ({ className }: { className: string }) => `${className}`,
    xl: ({ className }: { className: string }) => `${className}`,
  },
} as const;

export const TesseractAccessibilityPreset = {
  screenReader: TesseractScreenReaderPreset,
} as const;

export type TesseractAccessibilityPresetType = Partial<
  typeof TesseractAccessibilityPreset
>;

export type TesseractScreenReaderPresetType = Partial<
  typeof TesseractScreenReaderPreset
>;
