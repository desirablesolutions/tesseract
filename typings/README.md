<!-- ⚠️ This README has been generated from the file(s) "DOCUMENTATION.md" ⚠️--><h1 align="center">Tesseract</h1>
<h4 align="center">A generous, hyper-dimensional, framework-agnostic, parametric, UI-component library.</h4>

<h4 align="center"><img src="https://github.com/desirablesolutions/tesseract/blob/main/docs/logo.png" height="260px" width="260px"></h4>
<h2>✨Features</h2>

* complete stylizer module for generating valid utility classSets. 
* Parametric module
* Variadic module


<h2>Installation</h2>

```bash
npm i t4@latest
```


*Just need utils & types?*

```bash
npm i t4-utils@latest t4-types@latest
```


<h2>🌟Usage</h2>

**just import & define component parameters.**

```ts
import { defineNavBar } from "t4-ui"

export type NavBarProps = {
    type: "variadic" | "parametric"
}

export const NavBar = defineNavBar({type: "variadic"})
```
<h2>Technologies</h2>

**dependencies**
1. [htm](https://www.npmjs.com/package/htm)
2. [vite]
3. [framer-motion]
4. [tailwindCSS]
(load:docs/AUTHORS.md)
<h2>⏳Changelog</h2>


<h3>v2.0.0</h3>


<h3>v2.0.0</h3>

<h2>©️Copyright</h2>

**©️ 2023 Désirable Solutions. All Rights Reserved.**

<h2>📜License</h2>

> This project is under the GPL-3.0-version license. ☂️

