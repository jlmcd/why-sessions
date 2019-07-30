import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import {click} from './utils/clicks'


function App() {
  const [clicks, updateClicks] = useState(0)
  axios.get('/api/clicks').then(res => updateClicks(res.data))
  return (
    <div className="App">
      <h1>{clicks}</h1>
      <button onClick={() => click(updateClicks)}>Click Me!</button>
    </div>
  )
}

export default App
