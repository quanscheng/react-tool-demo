import React, { useState } from "react"

import { Button } from "../styles"
import useTilg from "tilg"

const Demo3 = () => {
  const [count, setCount] = useState(0)

  //另一个关键的事情是知道为什么组件会重新渲染。useTilg为此，您提供了一个简单但功能强大的 API：
  //将模板文字附加到useTilg()调用时，它也将显示为调试消息：

  useTilg()`count = ${count}`

  return <Button onClick={() => setCount(count + 1)}>{count}</Button>
}

export default Demo3
