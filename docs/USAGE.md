<h2>🌟Usage</h2>

**typescript**

1. **choose a package**

```bash

npm i t4@latest

```



1. **import and configure your components.**

```javascript
import { defineNavBar } from "t4";


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

export const NavBar = defineNavBar({ target: "react", template: "blake", sx: themeSx })


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
