import { htm } from "htm/react"

import type { ViewType } from "blakprint/typings"


export type TargetProps = any

export type TesseractViewType = ViewType<{ any }>


type TargetOptions = "react" | "preact" | "reactNative" | "html"

export function $component<PropTypes>(target?: TargetProps, props?: PropTypes): TesseractViewType {

    return function (props) {
        return htm`${props.children}`
    }

}


const NavBar = $component<any>((props) => { 

    return htm`<div>
    
    <section className=${props.className}}>
    
    </section>
    </div>`

})