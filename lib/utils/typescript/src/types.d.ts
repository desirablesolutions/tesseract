import type { ViewType } from "blakprint/dist/typings"

export type T4TemplateNamesType = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona"  | "giselle" | "harper"  | "isabella" | "jade" | "kairos" | "lila"

export type T4TriggerNamesType = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type T4AlignmentStylesType = "left" | "center" | "right"

export type T4ComponentProps = NonNullable<{
    template: Record<T4TemplateNamesType, Function>,
    target: {
        name?: string,
        parser?: any
    },
    sx?: {
        on?: Record<T4TriggerNamesType, any>,
        color?: string,
        bgColor?: string,
        alignment?: T4AlignmentStylesType,
        borderColor?: string,
        roundness?: number
    }
}>


export type T4ViewType = (props: any) => ViewType<any, any>

export type TargetOptions = "react" | "preact" | "reactNative" | "html"

export type TargetOptionProps = {
    name?: string,
    parser?: Function | Promise<Function>
}

export type T4TemplateProps = {
    meta?: {
        name?: string,
        tags?: string | string[],
        description?: string
    },
}
