import { defineNavBar } from "t4"



export default function NavBar(props) {

    return defineNavBar({
        preset: "helios"
    }).value(props)
}