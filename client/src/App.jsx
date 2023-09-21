import { useState } from 'react'
import './App.css'
import GameForm from "./components/Form.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GameForm></GameForm>
    </>
  )
}

export default App
