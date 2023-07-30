import { useState } from 'react'
import './App.css'
import General from './components/General.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cvContainer">
        <General />
      </div>
    </>
  )
}

export default App
