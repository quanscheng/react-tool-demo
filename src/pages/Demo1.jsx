import { Button } from "../styles"
import React from "react"
import useTilg from "tilg"

const Demo1 = () => {
  useTilg() //只需将useTilg()钩子插入组件，它就会在控制台中记录render、mount、unmount事件：
  return <Button>Click me, demo 1</Button>
}

export default Demo1
