import type { PresetType } from "../types/types";
import { defineClassSerializer } from "blakprint";

export const serializeClasses = defineClassSerializer();

export function processPreset(preset: PresetType): string {
  const buildString = (): string => {
    const _base_ = serializeClasses.value(
      `${preset.base} sm:${preset.sm} md:${preset.md} lg:${preset.lg} xl:${preset.xl} dark:${preset.dark}`
    ) as string;
    return _base_;
  };

  return buildString() as string;
}
