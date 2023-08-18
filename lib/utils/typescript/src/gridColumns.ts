export function gridColumns(cols: number): TailwindClassList {
    const presets: TailwindGridColumnType[] = [
      "grid-cols-1",
      "lg:grid-cols-2 sm:grid-cols-1",
      "lg:grid-cols-3 sm:grid-cols-1",
      "lg:grid-cols-4 sm:grid-cols-1",
    ];
  
    return `${presets[DECREMENT_BY_ONE(cols < presets.length ? cols : 0)]}`;
  }