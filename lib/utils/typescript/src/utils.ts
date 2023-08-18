export function processPreset<PresetTypes = Object>(preset: PresetTypes) {

    const stringss = Object.entries(preset).map(([key, value]: any) => {
        return `${key}:${value.base} ${value.sm} ${value.md} ${value.lg}`
    })
    return ``
}