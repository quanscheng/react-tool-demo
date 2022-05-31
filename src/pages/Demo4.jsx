import React, { useState } from "react"

import useTilg from 'tilg'

const Demo4 = () => {
  /**
   * 调试组件时让我很困扰的是，有时很难知道哪个状态发生了变化并触发了重新渲染。
   * useTilg跟踪调试消息中的所有参数，并告诉您自上次渲染以来哪个参数发生了变化：
   */
  const [input, setInput] = useState("")
  const [count, setCount] = useState(0)

  useTilg()`input = ${input}, count = ${count}`

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

export default Demo4
