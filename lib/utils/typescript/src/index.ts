import { html } from "htm/react"
import type { ViewType } from "blakprint/dist/typings"



export function $template(props: TessereactTemplateProps) {
    return {
        ...props
    }
}

export function $component<PropTypes>(data: TesseractComponentProps): TesseractViewType {

    return function <PropTypes>(props: PropTypes) {
        return html`${data.closure()}`
    }
}

