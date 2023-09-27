import type { PresetType } from "..";

export type TesseractBackgroundColorBaseParameters = Parameters<
  (params: { intensity: number }) => string
>[0];

export const TesseractBackgroundColorPreset =
  {
    default: {
      base: () => "bg-transparent",
    },
    black: {
      base: () => "bg-black",
    },
    white: {
      base: () => "bg-white",
    },
    red: {
      base: (overrides: TesseractBackgroundColorBaseParameters) => `bg-red-${overrides.intensity * 100}`,
    },
    orange: {
      base: (overrides: any) => `bg-red-${overrides.intensity * 100}`,
    },
    yellow: {
      base: (overrides: any) => `bg-yellow-${overrides.intensity * 100}`,
    },
    green: {
      base: (overrides: any) => `bg-green-${overrides.intensity * 100}`,
    },
    blue: {
      base: (overrides: any) => `bg-blue-${overrides.intensity * 100}`,
    },
    indigo: {
      base: (overrides: any) => `bg-indigo-${overrides.intensity * 100}`,
    },
    violet: {
      base: (overrides: any) => `bg-violet-${overrides.intensity * 100}`,
    },
    gray: {
      base: (overrides: any) => `bg-gray-${overrides.intensity * 100}`,
    },
    custom: {
      base: ({ colorCode }: { colorCode: string})=> `bg-[${colorCode}]`
    }
  };

export const TesseractBackgroundOpacityPreset: PresetType = {
  default: {
    base: (opacity?: number): string =>
      !opacity ? "bg-opacity-100" : `bg-opacity-${Math.floor(opacity * 100)}`,
  },
} as const;



export const TesseractBackgroundPreset = {
  backgroundColor: TesseractBackgroundColorPreset,
  backgroundOpacity: TesseractBackgroundOpacityPreset,
  backgroundPosition: null,
  backgroundClip: null,
  backgroundAttachment: null,
  gradientColorStops: null,
} as const;

export type TesseractBackgroundPresetType = Record<
  keyof typeof TesseractBackgroundPreset,
  typeof TesseractBackgroundPreset
>;

export type TesseractBackgroundColorPresetType =
  typeof TesseractBackgroundColorPreset;
