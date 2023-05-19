import type { ViewType } from "blakprint/dist/typings"

export type TemplateName = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona" | "giselle" | "harper" | "isabella" | "jade" | "kairos" | "lila"

export type TriggerName = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type AlignmentStyle = "left" | "center" | "right"

export type TargetOption = "react" | "preact" | "svelte" | "vue"

export type LayoutPositionTypes = "relative" | "absolute" | "fixed" | "sticky" | "static" | "inherit" | "initial" | "unset"

export type Target = {
    name?: string,
    parser?: Function
}

export type Template<Props = any> = (props: Props) => any;

export type TemplateRegistry = {
    [K in TemplateName]?: Template;
}


export type LayoutSxProps = {
    height?: string | number,
    width?: string | number,
    position?: LayoutPositionTypes,
}

export type TextSxProps = {
    size: string | number,
    fontFamily: string,
    modes: string[],
    color: string,
}

export type SpecialEffectsNameTypes = "roundness" | "glassiness"

export type SpecialEffectsProps<T> = {
    roundness?: {

    },

    glassiness?: {},
    depth?: {},
    animate?: {
        in: {},
        out?: {}
    }


} & T


export type Canvas<T> = {
    color?: string,
    zIndex?: number
} & T

export type BackgroundSxProps = Canvas<{

}>

export type ForegroundSxProps = Canvas<{

}>

export interface StylizerProps<TriggerTypes = unknown> {
    on?: Record<TriggerName, TriggerTypes>,
    fg?: ForegroundSxProps,
    bg?: BackgroundSxProps,
    layout?: LayoutSxProps,
    text?: TextSxProps,
    fx?: SpecialEffectsProps<any>,
    children?: StylizerProps<any>
}

export type TargetProps = {
    name?: string,
    parser?: Function | Promise<Function>
}

export type TemplateProps = {
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
    sx?: StylizerProps
}

export type TemplateProps = {
    name: TemplateName,
    template: (props: Props) => string, meta?: any
}
