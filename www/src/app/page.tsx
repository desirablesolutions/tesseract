

import { screenReader } from "t4-utils";

const mySx = screenReader({}).value();

export default function Home() {
  return <>{mySx}</>;
}
