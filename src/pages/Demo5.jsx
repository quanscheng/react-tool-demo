import React, { useState } from "react"

import useTilg from "tilg"

const Demo5 = () => {
  const [input, setInput] = useState("")
  const [count, setCount] = useState(0)
  // 如果您不需要调试消息，而只想快速记录一些值，只需将它们直接传递给钩子即可：
  useTilg(input, count)

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

export default Demo5
