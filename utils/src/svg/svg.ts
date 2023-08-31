import { processPreset } from "../utils/utils";
import type { PresetType } from "../types/types";

export const TesseractColumnSpanPresets = {
fill: {},
stroke: {},
strokeWidth: {},
} as const;

export type TesseractColumnSpanPresetsTypes = typeof TesseractColumnSpanPresets;

export function svg(
  value: keyof TesseractColumnSpanPresetsTypes,
  overload?: PresetType
): string {
  const data = TesseractColumnSpanPresets[value] as PresetType;

  if (!overload) {
    return processPreset(data);
  } else {
    return processPreset(overload);
  }
}
