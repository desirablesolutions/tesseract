
  
export default function transforms(
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
  