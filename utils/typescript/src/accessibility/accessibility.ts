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
  
  
  
  export function screenReaderOnly(
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
  
  
  export function accessibility(
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
  