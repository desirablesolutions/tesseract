import { Definition } from "blakprint";
import type { PresetType } from "..";
export declare const serializeClasses: import("blakprint").UtilityType<string | string[], string, Error>;
export declare function defineStylizer<BaseParameters>({ preset, overrides, }: {
    preset: PresetType<BaseParameters>;
    overrides?: BaseParameters;
}): Definition<BaseParameters, string, Error>;
