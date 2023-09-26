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


