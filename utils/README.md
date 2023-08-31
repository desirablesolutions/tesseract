<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Tesseract</h1>
<h4 align="center">A generous, hyper-dimensional, framework-agnostic, parametric, UI-component library.</h4>

<h4 align="center"><img src="https://github.com/desirablesolutions/tesseract/blob/main/docs/logo.png" height="260px" width="260px"></h4>
<h2>Screenshots</h2>
<h2>✨Features</h2>

* TailwindCSS-first class names.
* Unique customization schema with style-focused proper-named templates.
* Compile-time & run-time template literal parser for targeting any framework. (it's just STL & pure functions😆)
* Clear and clean customizations.
* Generic types & definition functors provided through [Blakprint](https://blakprint.pro)
* Multiple packge types and sizes.
* Multiple CDN access.
<h2>Installation</h2>

```bash
npm i t4-[package]-[specific | agnosic] 
```
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


export const Page = props => {

    return (
       <>
        <NavBar {...props?.navBar}/>
        <Button {...props?.buton}/>
        <Footer {...props?.footer}/>
       </>
    )
}
```

<h2>Technologies</h2>

**dependencies**
1. [htm](https://www.npmjs.com/package/htm)
2. [vite]
3. [framer-motion]
4. [tailwindCSS]
<h2>📦Packages</h2>

**Platforms**

1. **Framework Specific**
   1. [React]
   2. [Qwik]
2. **Framework Agnostic**
   1. T4-Intermidary Format --> Custom Parser Target.

---

**Options**

1. core
2. tiny
3. full
4. fancy

---

(load:docs/AUTHORS.md)
(load:docs/ACKNOWLEDGEMENTS.md)
(load:docs/ISSUES.md)
<h2>⏳Changelog</h2>



<h3>v2.0.0</h3>

<h2>©️Copyright</h2>

**©️ 2023 Désirable Solutions. All Rights Reserved.**

<h2>📜License</h2>

> This project is under the GPL-3.0-version license. ☂️

