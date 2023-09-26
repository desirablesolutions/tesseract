

import { screenReader, background, accessibility } from "t4-utils";



export default function Page() {
  const test = screenReader({
    sx: {
      className: "fillmeup"
    },
    preset:  "custom"
  })
  


  return (
    <div>
      {test.value()}
    </div>
  )
}