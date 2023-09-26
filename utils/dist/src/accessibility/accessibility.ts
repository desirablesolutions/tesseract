import { Definition, define } from "blakprint";
import { TesseractAccessibilityPreset } from "./presets";
import { screenReader as ScreenReader } from "./screenReader";
import { defineStyleSet } from "..";

export function accessibility({
  screenReader,
}: {
  screenReader?: any;
}): Definition {
  return defineStyleSet({
    ...TesseractAccessibilityPreset,
  });
}
