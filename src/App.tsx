import React from 'react'
import './index.css'

import TurnTrackerMainComponent from './components/TurnTrackerMainComponent'

function App() {

  return (
    <div className="App flex flex-col items-center">
      <header className="w-full bg-gray-500 p-5 mb-4 shadow-md">
        <h1 className="w-full text-white text-4xl">5e Turntracker</h1>
      </header>
      <TurnTrackerMainComponent/>
    </div>
  )
}

export default App
