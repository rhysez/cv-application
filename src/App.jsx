import { useState } from 'react'
import './App.css'
import General from './components/General'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  return (
    <>
      <h1>CV Builder</h1>

      <div className='pageContainer'>
        <div className="cvContainer">
          <General />
          <Education />
          <Practical />
        </div>

        <div className='finalContainer'>

        </div>
      </div>
    </>
  )
}

export default App
