import type { T4ComponentProps, T4TemplateProps, T4ViewType } from "./types"


export function $template(props: T4TemplateProps) {
    return {
        ...props
    }
}

export function $component<PropTypes>(data: T4ComponentProps): T4ViewType {

    return function <PropTypes>(props: PropTypes) {
        return data.target.parser`${data.template.}`
    }
}

