import type { ComponentProps } from "blakprint/dist/typings"

export type HeroProps = ComponentProps<{
    banner?: string,
    socials?: any
},
    {
        params?: {
            presets?: string,
            stylizers?: Function[]
        }
    }>