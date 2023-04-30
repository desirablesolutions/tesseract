import * as React from 'react';
import type { JSXComponentType } from "blakprint/dist/typings";
import type { NavBarProps } from "src/types";

export default function NavBar(props: NavBarProps): JSXComponentType<NavBarProps> {
    return (
       <h1>Hello World</h1>
    )
}