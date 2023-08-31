import {
  TesseractBackgroundImagePresets,
  TesseractGradientColorStopsPresets,
} from "../presets";
import type {
  PresetType,
  TesseractBackgroundImagePresetsType,
  TesseractGradientColorStopsPresetsType,
} from "../types/types";
import { processPreset } from "../utils/utils";





export function backgrounds(
  value: keyof TesseractGradientColorStopsPresetsType,
  overload?: PresetType
): string {
  const data = TesseractGradientColorStopsPresets[value] as PresetType;
  if (!overload) {
    return processPreset(data);
  } else {
    return processPreset(overload);
  }
}
