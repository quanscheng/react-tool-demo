import "./App.css"

import { useCallback, useState } from "react"

import Child from "./pages/Child"
import { PUB_TOPIC } from "./publish"
import PubSub from "pubsub-js"

function App() {
  const handleClick = useCallback(() => {
    PubSub.publish(PUB_TOPIC, Math.random(0, 1))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <button style={{ backgroundColor: "greenyellow" }} onClick={handleClick}>
          click to publish!
        </button>
        <Child />
      </header>
    </div>
  )
}

export default App
