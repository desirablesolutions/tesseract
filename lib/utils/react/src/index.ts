import type { ViewType } from "blakprint/dist/typings"


export type TargetProps = {}

export type TesseractViewType = ViewType<{ any }>

export function $component(targets: TargetProps[], props?: any): TesseractViewType {
    return '$component';
}
