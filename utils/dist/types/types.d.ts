import type { EffectorType } from "blakprint";
export type BASE_PRESET_TYPE<TypeParams = any> = {
    base: EffectorType<TypeParams, string>;
    sm?: EffectorType<TypeParams, string>;
    md?: EffectorType<TypeParams, string>;
    lg?: EffectorType<TypeParams, string>;
    xl?: EffectorType<TypeParams, string>;
    dark?: EffectorType<TypeParams, string>;
    on?: Partial<{
        hover: EffectorType<TypeParams, string>;
        click: EffectorType<TypeParams, string>;
        touch: EffectorType<TypeParams, string>;
        focus: EffectorType<TypeParams, string>;
        highlight: EffectorType<TypeParams, string>;
        active: EffectorType<TypeParams, string>;
    }>;
};
export type PresetType<TypeParams = any> = {
    default: BASE_PRESET_TYPE;
    [identifier: symbol | string]: BASE_PRESET_TYPE<TypeParams>;
} | EffectorType<any, BASE_PRESET_TYPE<TypeParams>>;
