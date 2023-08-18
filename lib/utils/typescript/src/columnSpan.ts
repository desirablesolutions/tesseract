import { processPreset } from "./utils";

export const TesseractColumnSpanPresets = {
  "col-span-0": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-0.25": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-0.5": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-1": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-1.25": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-1.5": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-2": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
  "col-span-2.5": {
    base: "col-span-0",
    md: "col-span-1",
    lg: "col-span-2",
    xl: "col-span-3",
  },
} as const;

export type TesseractColumnSpanPresetsTypes = typeof TesseractColumnSpanPresets;

export function columnSpan(span: string): string {
  const data =
    TesseractColumnSpanPresets[span as keyof TesseractColumnSpanPresetsTypes];


    const preset = processPreset<TesseractColumnSpanPresetsTypes[""]>(data)
  return `${preset}`;
}
