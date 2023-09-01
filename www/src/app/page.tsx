

import { screenReader, background, accessibility } from "t4-utils";

const test3 = background({
  backgroundColor: {}
})

export default function Page() {
  const test = screenReader({
    preset: Date.now() % 2 === 0  ? "default" : undefined
  }).value()
  
  const test2 = accessibility({
    screenReader: {
      preset: Date.now() %  2!== 0  ? "disabled" : "default"
    }
  }).value()


  return (
    <div>
      {test}
      {test2}
    </div>
  )
}