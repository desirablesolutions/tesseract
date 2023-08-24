
export function fontFamily(
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
  

  
export function fontSize(
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
  

  
export function fontWeight(
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
  

  
export function textColor(
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
  

  export function typography(
    presetTypes:any
  ) {

    return {
      
    }
  }