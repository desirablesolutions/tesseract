import { Definition, define, defineClassSerializer } from "blakprint";
import type { PresetType } from "..";


export const SPACE_CHARACTER: string = " " as const 

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


export function defineStyleSet(params: any): Definition {
  
  const result = define<any, string, any>(() => {
    return Object.entries(params.sxMappings)
      .map(([key, stylizer]) => {
        return `${stylizer(
          params[key as keyof typeof params.sxMappings]
        ).value()}`;
      })
      .join(SPACE_CHARACTER);
  });
  
  return  result
}