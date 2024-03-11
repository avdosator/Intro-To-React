import { useState } from "react";
import Dice from "./Dice";
import { rollDice, sum } from "./utils";

function LuckyN({numDices = 2, target = 7, color}) {
    let [dice, setDice] = useState(() => rollDice(numDices));
    const isWinner = sum(dice) === target;
    function roll() {
        setDice(() => rollDice(numDices));
    }
    return (
        <div>
            <h2>Lucky{target} {isWinner && "You win"}</h2>
            <Dice dice={dice} color={color} />
            <button onClick={roll}>Roll Again</button>
        </div>
    )
}

export default LuckyN;