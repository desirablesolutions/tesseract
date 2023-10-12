import {
    defineClassSerializer,
} from "blakprint";

  
  export const serializeClasses = defineClassSerializer<
    string | string[],
    string,
    Error
  >();