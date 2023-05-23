
import type { TesseractComponentParams } from './types';
import * as templates from './templates';
import type { JSXComponentType } from "blakprint/dist/typings"

import { html } from "htm/react"

export default function $component<PropType, MetaTypes>(data: TesseractComponentParams<PropType>): ViewCreatorType {


    type ComponentTypeParams = {
        template?: "default",
        sx?: any
    }

    const result = function ({ template, sx }: ComponentTypeParams) {
        return data.view
    }

    return result as ViewCreatorType
}

