import type { ViewType } from "blakprint/dist/typings"

export type TemplateNames = "ava" | "blake" | "celeste" | "delilah" | "ella" | "fiona" | "giselle" | "harper" | "isabella" | "jade" | "kairos" | "lila"

export type TriggerTypeNames = "click" | "hover" | "touch" | "scroll" | "load" | "visible" | "idle"

export type AlignmentStyleNames = "left" | "center" | "right"
export type ComponentTypeNames = "react" | "t4"

export type TargetOptionNames = "react" | "preact" | "svelte" | "vue"

export type LayoutPositionNames = "relative" | "absolute" | "fixed" | "sticky" | "static" | "inherit" | "initial" | "unset"

export type TargetType = {
    name: string,
    parser: <T> (stream: any) => T
}

export type Template<Props = any> = (props: Props) => any;

export type TemplateRegistry = {
    [K in TemplateNames]?: Template;
}


export type LayoutSxProps = {
    height?: string | number,
    width?: string | number,
    position?: LayoutPositionNames,
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

export type ComponentTargetType<TargetType = unknown> = {
    name: string,
    parser?: (stream: string) => TargetType | Promise<Function>
}

export type TemplateTypeParams = {
    sx: <T>(props: T) => StylizerProps,
    variants?: any,
    actions?: any,
    meta?: {
        name?: string,
        tags?: string | string[],
        description?: string
    },
}


export type TesseractComponentParams<PropTypes> = {
    type: ComponentTypeNames,
    view: (props?: PropTypes) => ViewType<PropTypes, unknown>,
    defaultProps?: PropTypes,
    templates?: TemplateType[]
}

