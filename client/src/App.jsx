import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {

  const [queryDesc, setQueryDesc] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", queryDesc)
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} className={styles.icon} alt='SqlLogo' />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input type="text" name='query-desc' placeholder='Describe your query' onChange={(e) => setQueryDesc(e.target.value)} />
        <input type="submit" value='Generate query' />
      </form>



    </main>
  )
}

export default App
