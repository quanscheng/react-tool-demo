import "./App.css"

import _ from "lodash"
import logo from "./logo.svg"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    let a = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ]
    let b = [
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ]
    console.log(_.differenceBy(a, b,"value"))
  })
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
