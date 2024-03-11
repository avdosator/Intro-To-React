import { useState } from "react"
import {d6, sum, rollDice} from "./utils"
import "./Lucky7-die.css"
import "./Lucky7-dice.css"

export default function Lucky7() {
    let [dice, setDice] = useState(rollDice(2));
    const won = sum(dice) === 7;
    function roll() {
        setDice(rollDice(2));
    }
    return (
        <main className="Lucky7">
            <h1>Lucky7 {won && "You win!!!"}</h1>
            <section className="Lucky7-dice">
                <div className="Lucky7-die">{dice[0]}</div>
                <div className="Lucky7-die">{dice[1]}</div>
            </section>
            <button onClick={roll}>Roll Again</button>
        </main>
    )
}