function processPreset(preset) {
  const buildString = () => {
    const _base_ = `${preset.base} sm:${preset.sm} md:${preset.md} lg:${preset.lg} xl:${preset.xl} dark:${preset.dark}`;
    return _base_;
  };
  return buildString();
}
const TesseractColumnSpanPresets = [
  {
    base: "col-span-0",
    md: "col-span-0",
    lg: "col-span-0",
    xl: "col-span-0"
  },
  {
    base: "col-span-1",
    md: "col-span-1",
    lg: "col-span-1",
    xl: "col-span-1"
  },
  {
    base: "col-span-2",
    md: "col-span-2",
    lg: "col-span-2",
    xl: "col-span-2"
  },
  {
    base: "col-span-3",
    md: "col-span-3",
    lg: "col-span-3",
    xl: "col-span-3"
  },
  {
    base: "col-span-4",
    md: "col-span-4",
    lg: "col-span-4",
    xl: "col-span-4"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  },
  {
    base: "col-span-5",
    md: "col-span-5",
    lg: "col-span-5",
    xl: "col-span-5"
  }
];
function columnSpan(span, overload) {
  const data = TesseractColumnSpanPresets[typeof span == "number" ? span % TesseractColumnSpanPresets.length : span];
  if (!overload) {
    return processPreset(data);
  } else {
    return processPreset(overload);
  }
}
const TesseractColumnGapPresets = [
  {
    base: "gap-0"
  }
];
function gap(span, overload) {
  const data = TesseractColumnGapPresets[typeof span == "number" ? span % TesseractColumnGapPresets.length : span];
  if (!overload) {
    return processPreset(data);
  } else {
    return processPreset(overload);
  }
}
export { columnSpan, gap, processPreset };
