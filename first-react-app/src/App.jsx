import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ArrayArgument from './ArrayArgument'

function App() {
  return (
    <div>
      {/* <Greeter name="avdo" />
      <Greeter name="vedo" /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die  /> */}
      <ArrayArgument values={[1,2,3,4]} />
    </div>
  )
}

export default App
