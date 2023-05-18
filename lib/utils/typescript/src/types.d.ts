import type { ViewType } from "blakprint/dist/typings"

export type TemplateName = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona" | "giselle" | "harper" | "isabella" | "jade" | "kairos" | "lila"

export type TriggerName = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type AlignmentStyle = "left" | "center" | "right"

export type TargetOption = "react" | "preact" | "svelte" | "vue"

export type Target = {
    name?: string,
    parser?: Function
}

export type Template<Props = any> = (props: Props) => any;

export type TemplateRegistry = {
    [K in TemplateName]?: Template;
}

export interface StylizerProps<TriggerTypes = unknown> {
    on?: Record<TriggerName, TriggerTypes>,
    fg?: any,
    bg?: any,
    layout?: any,
    text?: any,
    fx?: any,
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
    view: ViewType<any, any>,
    sx?: SXStyle
}

export type ViewCreator = (props: any) => ViewType<any, any>


export type TemplateProps = {
    name: TemplateName,
    template: (props: Props) => string, meta?: any
}
