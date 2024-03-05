import './App.css'
import Greeter from './Greeter'
import Die from './Die'

function App() {
  return (
    <div>
      {/* <Greeter name="avdo" />
      <Greeter name="vedo" /> */}
      <Die numSides={20} />
      <Die numSides={6} />
      <Die  />
    </div>
  )
}

export default App
