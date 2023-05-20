
import type { TesseractComponentParams } from './types';
import * as templates from './templates';
import type { JSXComponentType, ViewCreatorType } from "blakprint/dist/typings"
import { html } from "htm/react"

export default function $component<PropType, MetaTypes>(data: TesseractComponentParams<PropType>): ViewCreatorType {

    const ViewCreator = {
        templateRegistry: data?.templates || templates,,
        data: function (params: { template?: "default" | "ava", sx?: any }) {
            return data.view
        }
    }
    return ViewCreator
}


const NavBar = $component({
    type: "react",
    view: (props: any): JSXComponentType<any, any> => {
        return (
            html`<div>
                <main>
                    ${props.children}
                </main>
            </div>`
        )
    }
})

const MyNav = NavBar({ template: "default", sx: {} }).data

