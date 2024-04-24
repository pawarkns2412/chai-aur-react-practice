import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    //setCount(count + 1)
    if (count < 20) { 
      setCount(count + 1)
    } else {
      alert ('Maximum value is  20')
    }
  }
  const removeValue = () => {
    //setCount(count - 1) 
    if (count > 0) {
      setCount(count - 1 )
    } else {
      alert('Minimum Value is 0')
    }
  }

  return (
    <>
      <h1>First Project</h1>
      <h3>Counter {count}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
