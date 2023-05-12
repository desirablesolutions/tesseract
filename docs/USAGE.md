<h2>🌟Usage</h2>

**choose a package**

```bash

npm i t4-basic-ts

```

**...or someponents you need**

```bash
npm i t4-navbar-ts t4-footer-ts t4-button-ts
```

**then import and configure your components.**

```javascript
import { Navbar as T4NB } from "t4-navbar-ts";
import { Footer as T4Footer } from "t4-footer-ts";
import { Button as T4Button } from "t4-button-ts";


const navStyles = {
    bg: "black",
    on: {
        hover: {
            color: "white",
            bg: "black",
            duration: "0.5s",
        },
        }
    }
}

export const NavBar = T4NB({ target: "react", template: "blake", sx: navStyles })


const App = (props) => {

    return (
        <NavBar {...props}/>
    )
}
```
