import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logincard from "../components/Logincard";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Logincard />
    </div>
    </>
  )
}

export default App
