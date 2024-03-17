import './App.css'
import Greeter from './Greeter'
import ArrayArgument from './ArrayArgument'
import ObjectArgument from './ObjectArgument'
import DoubleDice from './DoubleDice'
import DynamicHeading from './DynamicHeading'
import ColorList from './ColorList'
import Slots from './Slots'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Clicker2 from './Clicker2'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxContainer from './ColorBoxContainer'
import StateCounter from './StateCounter'
import StateBigData from './StateBigData'
import StateScoreKeeper from './StateScoreKeeper'
import StateLetterClicker from './StateLetterClicker'
import ScoreKeeper from './ScoreKeeper'
import Lucky7 from './Section-68/Lucky7'
import Die from './Section-68/Die'
import Dice from './Section-68/Dice'
import LuckyN from './Section-68/LuckyN'
import { sum } from './Section-68/utils'
import BoxGrid from './Section-68/BoxGrid'
import UsernameForm from './Section-69-Forms/UsernameForm'
import BadSignupForm from './Section-69-Forms/BadSignupForm'
import SignUpForm from './Section-69-Forms/SignUpForm'
import ShoppingListForm from './Section-69-Forms/ShoppingListForm'
import ShoppingList from './Section-69-Forms/ShoppingList'
import FormDemo from './Section-69-Forms/FormDemo'
import EffectCounter from './Section-70-Effects/EffectCounter'
import QuoteFetcher from './Section-70-Effects/QuoteFetcher'
import GitHubProfileSearch from './Section-70-Effects/GitHubProfileSearch'
import MaterialUI from './Section-71-Material-UI/MaterialUI'


const data = [
	{ id: 1, item: "eggs", quantity: 10, completed: true },
	{ id: 2, item: "milk", quantity: 2, completed: false },
	{ id: 3, item: "apple", quantity: 15, completed: false },
	{ id: 4, item: "chicken", quantity: 1, completed: true }
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

function lessThan5(dice) {
	return sum(dice) < 5;
}

const allEqual = (dice) => dice.every((v) => v === dice[0]);

function App() {
	return (
		<div>
			<MaterialUI />
			{/* <GitHubProfileSearch /> */}
			{/* <QuoteFetcher /> */}
			{/* <EffectCounter /> */}
			{/* <FormDemo /> */}
			{/* <ShoppingList /> */}
			{/* <SignUpForm /> */}
			{/* <LuckyN numDices={2} winCheck={lessThan5} color="red" title="Sum less than 5" />
      <LuckyN numDices={3} winCheck={allEqual} title="Roll same numbers" /> */}
			{/* <Lucky7 /> */}
			{/* <ScoreKeeper numPlayers={10} target={2} /> */}
			{/* <StateLetterClicker /> */}
			{/* <StateScoreKeeper /> */}
			{/* <StateBigData /> */}
			{/* <StateCounter /> */}
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
      <Slots val1="a" val2="a" val3="a" /> */}
		</div>
	)
}

export default App
