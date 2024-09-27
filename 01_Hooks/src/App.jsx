import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setCounter] = useState(0)

  //let counter = 5; 

  const addValue = () => {
    console.log("value added", counter);
      if (counter < 20 )
    setCounter(counter + 1)
    
  }

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);}
  }

  return (
    <>
      <h1>Rophile ke pass kitni cars hein</h1> 
      <h2>Counter values: {counter}</h2>
      <button
      onClick={addValue}
      >Add Car {counter} </button>
      <br />   
      <button
      onClick={decreaseValue}
      >Decrease Car {counter}</button>
      <p>Footer: {counter} </p>   
    </>
  )
}

export default App
