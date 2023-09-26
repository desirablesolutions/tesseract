import { Definition, define, } from "blakprint";
import type {
  PresetIteratorTupleType,
  StyleSetDefinitionParams,
  StylizerDefinitionParams,
} from "..";
import { serializeClasses } from "./serialize";

/**
 * Defines a stylizer based on given parameters.
 *
 * @template BaseParameters - The base parameters for the stylizer.
 * @param {Object} preset - An object containing preset styles.
 * @param {Object} overrides - An object containing styles that override the preset styles.
 * @returns {Definition<BaseParameters, string, Error>} - A Definition object that contains the base parameters, a string representation of the stylizer, and any potential errors.
 */

export function defineStylizer<BaseParameters>({
  preset,
  overrides,
}: StylizerDefinitionParams<BaseParameters>): Definition<
  BaseParameters,
  string,
  Error
> {
  const OMISSION_BASE_STRING = "base" as const;
  const result: string = serializeClasses.value(
    Object.entries(preset).map(
      ([directive, stylizer]: PresetIteratorTupleType<BaseParameters>) => {
        return `${
          directive === OMISSION_BASE_STRING ? null : `${String(directive)}:`
        }${stylizer(overrides)}`;
      }
    )
  );

  return define<BaseParameters, string, Error>(result);
}

export function defineStyleSet<TypeParams, ErrorParams = Error>({
  preset,
  parameters,
}: StyleSetDefinitionParams): Definition<TypeParams, string, ErrorParams> {
  const result: string = serializeClasses.value(
    Object.entries(preset).map(
      ([key, stylizerParams]: [
        string | symbol,
        { [id: symbol]: StylizerDefinitionParams<TypeParams> }
      ]) => {
        return `${stylizerParams.value(parameters[key])}`;
      }
    )
  );

  return define<TypeParams, string, ErrorParams>(result);
}
