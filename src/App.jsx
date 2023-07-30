import { useState } from 'react'
import './App.css'
import General from './components/General'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV Builder</h1>

      <div className="cvContainer">
        <General />
        <Education />
        <Practical />
      </div>
    </>
  )
}

export default App
