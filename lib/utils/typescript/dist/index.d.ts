import type { ViewType } from "blakprint/dist/typings";
export type TesseractViewType = (props: any) => ViewType<any, any>;
export type TargetOptions = "react" | "preact" | "reactNative" | "html";
export type TesseractComponentProps = {
    target?: TargetOptions;
    templates?: string[];
    children?: any;
    closure: Function;
};
export declare function $template(props: any): {};
export declare const Ava: {};
export declare function $component<T>(data: TesseractComponentProps): TesseractViewType;
