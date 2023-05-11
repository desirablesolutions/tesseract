import type { ViewType } from "blakprint/dist/typings"

export type T4TemplateNamesType = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona"

export type T4TriggerNamesType = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type T4AlignmentStylesType = "left" | "center" | "right"

export type T4ComponentProps = {
    template?: T4TemplateNamesType
    sx?: {
        on?: Record<T4TriggerNamesType, any>,
        color?: string,
        bgColor?: string,
        alignment?: T4AlignmentStylesType,
        borderColor?: string,
        roundness?: number
    }
}


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
