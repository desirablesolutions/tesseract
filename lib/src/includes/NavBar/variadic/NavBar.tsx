import { default as Burger } from "../parametric/Burger";
import { default as CallToAction } from "../parametric/CallToAction";
import { default as Container } from "../parametric/Container";
import { default as Favicon } from "../parametric/Favicon";
import { default as LeftLinks } from "../parametric/LeftLinks";
import { default as RightLinks } from "../parametric/RightLinks";
import * as React from "react"
import { defineVariadicComponent } from "blakprint"
import { stylizer as sx } from "t4"


export default function defineVariadicNavBar(preset,sx) {

  return defineVariadicComponent({
    views: {
      default: {
        component: {},
        container: ({ children, sx }: any) => {
          return (
            <div className={classSet([
              sx(sx)
            ])}>
              {children}
            </div>
          )
        }
      }
    },

    presets: {
      default: {
        variants: "default",
        sx: {

        }
      }
    }
  })
}