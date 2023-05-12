<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h2 align="center">Tesseract</h2>


<h4 align="center">⏹️A generous, generically typed, parametric UI kit for Typescript projects.</h4>

<h4 align="center"><img src="https://github.com/desirablesolutions/tesseract/blob/main/docs/logo.png" height="260px" width="260px"></h4>
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


const App = props => {

    return (
        <NavBar {...props}/>
    )
}
```

<h2>Technologies</h2>

**dependencies**
1. [react](https://www.npmjs.com/package/react)
2. 
<h2>Application</h2>
<h2>📦Packages</h2>

**options**

1. basic
2. tiny
3. full
<h2>Library</h2>

> This is a library of useful functions that can be used in your projects.

<h2>⏳Changelog</h2>

<h2>©️Copyright</h2>

> ©️ 2023 Désirable Solutions. All Rights Reserved.

<h2>License</h2>

> This project is under the GPL-3.0-version license.

