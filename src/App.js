import "./App.css"

// eslint-disable-next-line
import Demo1 from "./pages/Demo1" // eslint-disable-next-line
import Demo2 from "./pages/Demo2" // eslint-disable-next-line
import Demo3 from "./pages/Demo3" // eslint-disable-next-line
import Demo4 from "./pages/Demo4" // eslint-disable-next-line
import Demo5 from "./pages/Demo5"

function App() {
  /**
   * 调试组件时让我很困扰的是，有时很难知道哪个状态发生了变化并触发了重新渲染。
   * useTilg跟踪调试消息中的所有参数，并告诉您自上次渲染以来哪个参数发生了变化：
   */
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Demo1 /> */}
        {/* <Demo2 /> */}
        {/* <Demo3 /> */}
        {/* <Demo4 /> */}
        <Demo5 />
      </header>
    </div>
  )
}

export default App
