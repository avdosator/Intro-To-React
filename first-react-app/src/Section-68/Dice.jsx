// styles for this are in Lucky7.css
import Die from "./Die"

export default function Dice({dice, color}) {
    return (
        <div className="Dice">
            {dice.map((val, i) => <Die key={i} value={val} color={color}/>)}
        </div>
    )
}