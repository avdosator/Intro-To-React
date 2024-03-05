import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'

function App() {
  return (
    <div>
      <Greeter name="avdo" />
      <Greeter name="vedo" />
    </div>
  )
}

export default App
