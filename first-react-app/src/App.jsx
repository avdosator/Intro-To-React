import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ArrayArgument from './ArrayArgument'
import ObjectArgument from './ObjectArgument'
import DoubleDice from './DoubleDice'
import DynamicHeading from './DynamicHeading'
import ColorList from './ColorList'

function App() {
  return (
    <div>
      <DynamicHeading color='violet' text="This is dynamic heading" fontSize="35px" />
      <DynamicHeading color='lightblue' text="This is second dynamic heading" fontSize="20px" />
      {/* <Greeter name="avdo" />
      <Greeter name="vedo" /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die  /> */}
      {/* <ArrayArgument values={[1,2,3,4]} />
      <ObjectArgument person={ {name: "Avdo", age: 29} } /> */}
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "green", "blue", "yellow"]} />
    </div>
  )
}

export default App
