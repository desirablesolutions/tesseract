<h2>🌟Usage</h2>

**just import & define component parameters.**

```ts
import { defineNavBar } from "t4-ui"

export type NavBarProps = {
    type: "variadic" | "parametric"
}

export const NavBar = defineNavBar({type: "variadic"})
```