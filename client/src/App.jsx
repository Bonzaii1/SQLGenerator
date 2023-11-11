import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {

  const [queryDesc, setQueryDesc] = useState("")
  const [SqlQuery, setSqlQuery] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault();

    const generatedQuery = await generateQuery()
    setSqlQuery(generatedQuery)
  }

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ queryDesc: queryDesc })
    });

    const data = await response.json()
    return data.response.trim();
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} className={styles.icon} alt='SqlLogo' />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input type="text" name='query-desc' placeholder='Describe your query' onChange={(e) => setQueryDesc(e.target.value)} />
        <input type="submit" value='Generate query' />

        <pre>{SqlQuery}</pre>
      </form>



    </main>
  )
}

export default App
