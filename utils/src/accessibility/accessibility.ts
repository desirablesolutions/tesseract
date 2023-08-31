import { Definition, define } from "blakprint";
import { TesseractAccessibilityPreset } from "./presets";
import { screenReader as ScreenReader } from "./screenReader";
export function accessibility({
  screenReader,
}: {
  screenReader?: Record<keyof typeof TesseractAccessibilityPreset["screenReader"], any>;
}): Definition {

  
  return define(() => {
    return `${ScreenReader(screenReader?.preset).value()}`
  });
}



const testAcc = accessibility({
  screenReader: {
    preset: "default"
  }
}).value()