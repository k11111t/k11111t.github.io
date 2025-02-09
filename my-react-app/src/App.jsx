import { useState } from 'react'
import './App.css'
import ValentineComponent from './components/ValentineComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ValentineComponent/>
  )
}

export default App
