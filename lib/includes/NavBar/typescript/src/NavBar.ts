import { presets as NavBarPresets } from "./presets";

import {
  defineParametricComponent,
  defineHypertextTransformer,
} from "blakprint";

import {
  createParametricComponentPresets,
  createParametricComponentViews,
} from "blakprint";

import { default as NavBarContainer } from "./Container";

export default function defineNavBar() {
  return defineParametricComponent<any, { title: string }>({
    views: createParametricComponentViews({
      default: {
        component: ({ title, className }: any): string => {
          const onClickEvent = console.log;

          return `<h1 class="${className}"  onClick=${onClickEvent}>${title}</h1>
                          <h2 class="{{ color-primary }} {{ padding-primary }}"></h2>`;
        },
        container: NavBarContainer,
      },
    }),
    presets: createParametricComponentPresets(NavBarPresets),
  });
}
