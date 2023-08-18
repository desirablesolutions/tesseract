import {  createParametricComponentPresets, createParametricComponentViews } from "blakprint"



export const presets = {
    default: {
        sx: {
          container: {
            padding: {
              vertical: "py-0",
              horizontal: "px-0",
            },
          },
          component: {
            bgColor: {},
          },
        },
        actions: {
          getData: async () => {
            return null
          }
        },
        renderer: {
          name: "react",
          render: () => {},
        },
      },
      allison: {
        renderer: {
          name: "none",
          render: () => {},
        },
        sx: {
          container: {},
          component: {},
        },
      },
}