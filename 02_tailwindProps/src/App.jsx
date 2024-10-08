import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card titleApniMarziKa = "Whats you name" btnText = "visit me" />
     <Card titleApniMarziKa = "Yours daddy" btnText = "Click me" />
    </>
  )
}

export default App
