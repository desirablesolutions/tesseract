export type TesseractBlurFilterPresetsType = typeof TesseractBlurFilterPresets;

export type TesseractFiltersPresetsType = typeof TesseractFiltersPresets;

export function presetFilters(): TesseractFiltersPresetsType {
  return TesseractFiltersPresets;
}

export const TesseractBlurFilterPresets = [
  {
    base: "blur",
    sm: "blur",
  },
];

export const TesseractFiltersPresets = {
  blur: TesseractBlurFilterPresets as TesseractBlurFilterPresetsType,
  brightness: {},
  contrast: {},
  dropShadow: {},
  grayscale: {},
  hueRotate: {},
  invert: {},
  saturate: {},
  backdropBlur: {},
  backdropBrightness: {},
  backdropContrast: {},
  backdropGrayscale: {},
  backdropHueRotate: {},
  backdropInvert: {},
  backdropOpacity: {},
  backdropSaturate: {},
  backdropSepia: {},
} as const;
