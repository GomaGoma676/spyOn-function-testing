import logo from './logo.svg'
import { useState } from 'react'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState('')
  const fetchJson = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLoaded('loaded')
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loaded}
        <button onClick={fetchJson}>Click</button>
      </header>
    </div>
  )
}

export default App
