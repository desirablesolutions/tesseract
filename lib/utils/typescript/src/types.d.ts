import type { ViewType } from "blakprint/dist/typings"

export type TemplateName = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona"  | "giselle" | "harper"  | "isabella" | "jade" | "kairos" | "lila"

export type TriggerName = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type AlignmentStyle = "left" | "center" | "right"

export type TargetOption = "react" | "preact" | "reactNative" | "html"

export interface SXStyle {
    on?: Record<TriggerName, unknown>,
    color?: string,
    bgColor?: string,
    alignment?: AlignmentStyle,
    borderColor?: string,
    roundness?: number
}

export interface TargetProps {
    name?: string,
    parser?: Function | Promise<Function>
}

export interface TemplateProps {
    meta?: {
        name?: string,
        tags?: string | string[],
        description?: string
    },
}

export interface ComponentProps {
    template: Record<TemplateName, Function>,
    target: TargetProps,
    sx?: SXStyle
}

export type ViewCreator = (props: any) => ViewType<any, any>


