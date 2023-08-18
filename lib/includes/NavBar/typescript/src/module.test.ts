import { default as defineNavBar } from "./NavBar";

const TestNavBarRender = defineNavBar().value({
    preset: "default",
    sx: {
        component: {
            fontFamily: {
                primary: "sans-serif",
            }
        }
    }
})


const RenderWork = `${`<${TestNavBarRender} ${[]}>
                   <?text?>
                 </${TestNavBarRender}>`}`