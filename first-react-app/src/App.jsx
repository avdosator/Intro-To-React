import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ArrayArgument from './ArrayArgument'
import ObjectArgument from './ObjectArgument'
import DoubleDice from './DoubleDice'

function App() {
  return (
    <div>
      {/* <Greeter name="avdo" />
      <Greeter name="vedo" /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die  /> */}
      {/* <ArrayArgument values={[1,2,3,4]} />
      <ObjectArgument person={ {name: "Avdo", age: 29} } /> */}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </div>
  )
}

export default App
