export type PresetType<Extensions = unknown> = {
    base: string | ((...args: any[]) => string);
    sm?: string;
    md: string;
    lg: string;
    xl: string;
    dark?: string;
    on?: Partial<{
        hover: string;
        click: string;
        touch: string;
        focus: string;
        highlight: string;
        active: string;
    }>;
} & Extensions;
export type PresetsKeyTypes = "animation" | "typography";
