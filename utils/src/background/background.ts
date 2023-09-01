import { Definition, define } from "blakprint";
import { TesseractBackgroundPreset } from "./presets";
import { backgroundColor as BackgroundColor } from "./backgroundColor";

export type BackgroundSxProps = Partial<{
  backgroundColor: any;
  backgroundAttachment: any;
  backgroundClip: any;
  backgroundOpacity: any;
  backgroundPosition: any;
  gradientColorStops: any;
}>;

export function background(params: BackgroundSxProps): Definition {
  const backgroundsSxMap = {
    backgroundColor: BackgroundColor,
  };

  return define<BackgroundSxProps,  string, any>(() => {
    return Object.entries(backgroundsSxMap)
      .map(([key, stylizer]) => {
        return `${stylizer(
          params[key as keyof typeof backgroundsSxMap]
        ).value()}`;
      })
      .join(" ");
  });
}
