import type { EffectorType, Weak } from "blakprint";
import { defineStylizer } from "..";




export type BASE_PRESET_TYPE<TypeParams = any> = {
  base: EffectorType<TypeParams, string>;
  sm?: EffectorType<TypeParams, string>;
  md?: EffectorType<TypeParams, string>;
  lg?: EffectorType<TypeParams, string>;
  xl?: EffectorType<TypeParams, string>;
  dark?: EffectorType<TypeParams, string>;
  key?: TypeParams;
  on?: Partial<{
    hover: EffectorType<TypeParams, string>;
    click: EffectorType<TypeParams, string>;
    touch: EffectorType<TypeParams, string>;
    focus: EffectorType<TypeParams, string>;
    highlight: EffectorType<TypeParams, string>;
    active: EffectorType<TypeParams, string>;
  }>;
};

export type PresetType<TypeParams = any> =
  | {
      default: BASE_PRESET_TYPE<TypeParams>;
      [identifier: symbol | string]: BASE_PRESET_TYPE<TypeParams>;
    }
  | EffectorType<TypeParams, BASE_PRESET_TYPE<TypeParams>>;

export type StylizerDefinitionParams<BaseParameters = any> = {
  preset: PresetType<BaseParameters>;
  overrides?: BaseParameters;
};

export type PresetIteratorTupleType<BaseParameters> = [
  string | symbol,
  EffectorType<Weak<BaseParameters>, string>
];

export type StyleSetDefinitionParams<BaseParameters = any> = {
  preset: Record<
    symbol | string,
    { [identifier: symbol]: StylizerDefinitionParams }
  >;
  parameters?: BaseParameters;
};

export type StyleSetIteratorTupleType<BaseParameters> = [
  string | symbol,
  typeof defineStylizer
];
