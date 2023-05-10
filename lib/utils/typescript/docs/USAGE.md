<h2>Usage</h2>

**import a component or package**

```js
import { NavBar, Footer } from "t4-basic-react";
```

**configure your components**

```js

const myPreset: NavBarPresets = "david"
const mySx = {{
    on: {
        hover: {
            color: "red-500",
            transition: "ease-in-out 0.2s"
        }
    }
}}


export type MyProps = {
    links?: any[]
}
const MyNavBar = () => {
    const Nav = NavBar<MyProps>(myPreset, mySx)


    return (
        <Nav {...props}>
    )
}
```
