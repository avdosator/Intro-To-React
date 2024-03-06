import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ArrayArgument from './ArrayArgument'
import ObjectArgument from './ObjectArgument'
import DoubleDice from './DoubleDice'
import DynamicHeading from './DynamicHeading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'

const data = [
  {item: "eggs", quantity: 10, completed: true},
  {item: "milk", quantity: 2, completed: false},
  {item: "apple", quantity: 15, completed: false},
  {item: "chicken", quantity: 1, completed: true}
]

function App() {
  return (
    <div>
      <ShoppingList items={data} />
      {/* <DynamicHeading color='violet' text="This is dynamic heading" fontSize="35px" />
      <DynamicHeading color='lightblue' text="This is second dynamic heading" fontSize="20px" />
      <Greeter name="avdo" />
      <Greeter name="vedo" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die />
      <ArrayArgument values={[1, 2, 3, 4]} />
      <ObjectArgument person={{ name: "Avdo", age: 29 }} />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "green", "blue", "yellow"]} />
      <Slots val1="a" val2="a" val3="a" /> */}
    </div>
  )
}

export default App
