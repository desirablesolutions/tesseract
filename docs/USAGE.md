<h2>🌟Usage</h2>

**typescript**

1. **choose a package**

```bash

npm i t4-basic-ts

```

**or**

1. **some components you need**

```bash
npm i t4-navbar-ts t4-footer-ts t4-button-ts
```

2. **import and configure your components.**

```javascript
import { Navbar as T4NavBar } from "t4-navbar-ts";
import { Footer as T4Footer } from "t4-footer-ts";
import { Button as T4Button } from "t4-button-ts";


const themeSx: T4StylizerProps = {
    bg: "black",
    fg: "white",
    text: themeSx.fg,
    fx: {
        glassmorphism: {
            strength: "md"
        }
    },
    on: {
        hover: {
            color: "white",
            bg: "black",
            duration: "0.5s",
        },
        click: {
            outline: {
                color: "white",
                size: "2px",
                duration: "0.5s ease-in-out"
            }
        }
        }
    }
}

export const NavBar = T4NavBar({ target: "react", template: "blake", sx: themeSx })

export const Button = T4Button({ target: "react", template: "blake", sx: themeSx })

export const Footer = T4Footer({ target: "react", template: "blake", sx: themeSx })


export const Page = (props) => {

    return (
       <>
        <NavBar {...props?.navBar}/>
        <Button {...props?.buton}/>
        <Footer {...props?.footer}/>
       </>
    )
}
```
