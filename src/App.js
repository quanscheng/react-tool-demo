import "./App.css"

import styles from "./demo.module.scss"

function App() {
  return (
    <div className='App'>
      <div className={styles.demoWraper}>this is the css module demo</div>
      <button className={styles.button}>标签选择器</button>
    </div>
  )
}

export default App
