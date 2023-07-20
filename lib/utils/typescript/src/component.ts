
import type { TesseractComponentParams } from './types';
import * as templates from './templates';
import type { JSXComponentType } from "blakprint/dist/typings"

import { html } from "htm/react"

export function defineTesseractComponent() {

    return defineComponent(() => {
        return {
            render: (params: TesseractComponentParams) => {
                return html`${templates.tesseractComponent(params)}`
            }
        }
    })
}