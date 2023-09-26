import { TesseractAccessibilityPreset, TesseractAccessibilityPresetType, defineStyleSet } from "..";



export type AccessibilityProps = Record<keyof TesseractAccessibilityPresetType, any>

export function accessibility(
  props?: AccessibilityProps
) {
  return defineStyleSet({
    preset: TesseractAccessibilityPreset,
    parameters: props,
  });
}

