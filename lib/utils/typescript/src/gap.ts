const presets = ["gap-2", "gap-4", "gap-6", "gap-8"];


export function gap(gap: number): string {
  
    return `${presets[gap % presets.length]}`;
  }
  
  