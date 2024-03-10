import { useState } from "react"
import {v4 as uuid} from "uuid"

function pickLetter() {
    const letters = ["a", "b", "s", "z", "k", "x", "e"];
    return letters[Math.floor(Math.random() * letters.length)];
}

export default function StateLetterClicker() {
    const [letters, setLetters] = useState([{id: uuid(), letter: "a"}]);
    function addLetter() {
        const randLetter = pickLetter();
        setLetters(oldLetters => {
            return [...oldLetters, {id: uuid(), letter: randLetter}];
        })
    }
    return (
        <div>
            {letters.map(l => <span key={l.id} style={{fontSize: "4rem"}}>{l.letter}</span>)} <br/>
            <button onClick={addLetter}>Add Letter</button>
        </div>
    )
}