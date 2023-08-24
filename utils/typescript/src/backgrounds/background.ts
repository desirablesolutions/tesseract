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



export function backgroundImage(
  value: keyof TesseractBackgroundImagePresetsType,
  overload?: PresetType
): string {
  const data = TesseractBackgroundImagePresets[value] as PresetType;
  if (!overload) {
    return processPreset(data);
  } else {
    return processPreset(overload);
  }
}


export function gradientColorStops(
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
