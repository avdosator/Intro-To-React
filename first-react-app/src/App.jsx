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
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Clicker2 from './Clicker2'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxContainer from './ColorBoxContainer'
import StateCounter from './StateCounter'

const data = [
  {id: 1, item: "eggs", quantity: 10, completed: true},
  {id: 2, item: "milk", quantity: 2, completed: false},
  {id: 3, item: "apple", quantity: 15, completed: false},
  {id: 4, item: "chicken", quantity: 1, completed: true}
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = ["teal", "green", "aqua", "olive", "aquamarine", "grey", "antiquewhite", "cadetblue", "coral", "lightblue", "pink"];

function App() {
  return (
    <div>
      <StateCounter />
      {/* <ColorBoxContainer colors={colors}/> */}
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Form />
      <Clicker /> */}
      {/* <Clicker2 message="You clicked me" text="Click me"/>
      <Clicker2 message="Stop clicking me!" text="Don't click me"/> */}
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties={properties} /> */}
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
