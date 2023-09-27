
import { defineVariadicComponent } from "blakprint"


export default function defineVariadicNavBar() {

  return defineVariadicComponent({
    views: {
      default: {
        container: () => {
          return (<></>)
        },
        component: () => {
          return (<></>)
        }
      }
    },
    presets: {
      default: {

      }
    }
  })
}