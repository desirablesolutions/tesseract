import { Definition, define, defineClassSerializer } from "blakprint";
import type { PresetType } from "..";

export const serializeClasses = defineClassSerializer<
  string | string[],
  string,
  Error
>();

export function defineStylizer<BaseParameters>({
  preset,
  overrides,
}: {
  preset: PresetType<BaseParameters>;
  overrides?: BaseParameters;
}): Definition<BaseParameters, string, Error> {

  const BASE = "base" as const 
  const VOID_STRING = "" as const 

  const template = serializeClasses.value(

    Object.entries(preset).map(([directive, stylizer]: any) => {

      return `${directive == BASE ? VOID_STRING : `${directive}:`}${stylizer(overrides)}`;
    })

  );

  return define<BaseParameters, string, Error>(template);
}
