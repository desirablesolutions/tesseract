import { default as Burger } from "./Burger";
import { default as CallToAction } from "./CallToAction";
import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as LeftLinks } from "./LeftLinks";
import { default as RightLinks } from "./RightLinks";
import * as React from "react"
import { defineVariadicComponent } from "blakprint"
import { stylizer as sx } from "t4"


export default function defineNavBar(preset,sx) {

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