import { $component } from "t4-utils-ts"

export type NavBarProps = {
    favicon?: any
}

const NavBar = $component<NavBarProps>({
    closure: () => {
        return (
            `<div>NavBar</div>`
        )
    }
})

export default NavBar
