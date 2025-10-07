import React, { useState } from 'react'
import ComicDisplay from './components/ComicDisplay'
import './App.css'
import Music from './components/Music'

function App() {
  return (
    <div className="app">
      <ComicDisplay />
      <Music />
    </div>
  )
}

export default App
