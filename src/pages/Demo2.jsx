import React from "react"
import useTilg from "tilg"

function MyButton({ text }) {
  useTilg()
  return <button>{text}</button>
}

function Title({ children }) {
  useTilg()
  return <h1>{children}</h1>
}

const Demo2 = () => {
  /**
   *
   * 当呈现同一组件的多个元素时，它会添加一个计数器<MyButton/> (2)以进行区分，以便您知道谁在记录信息：
   */
  return (
    <>
      <Title>Welcome!</Title>
      <MyButton text='foo' />
      <MyButton text='bar' />
    </>
  )
}

export default Demo2
