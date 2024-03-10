import { useState } from "react"
import { v4 as uuid } from "uuid"

function pickLetter() {
    const letters = ["a", "b", "s", "z", "k", "x", "e"];
    return letters[Math.floor(Math.random() * letters.length)];
}

export default function StateLetterClicker() {
    const [letters, setLetters] = useState([{ id: uuid(), letter: "a" }]);
    function addLetter() {
        const randLetter = pickLetter();
        setLetters(oldLetters => {
            return [...oldLetters, { id: uuid(), letter: randLetter }];
        })
    }
    function deleteLetter(id) {
        setLetters(oldLetters => {
            return [...oldLetters.filter((l) => l.id !== id)]
        })
    }
    function allToX() {
        setLetters((oldLetters) => {
            return [...oldLetters.map((l) => {
                return {
                    ...l,
                    letter: "X"
                }
            })]
        })
    }
    return (
        <div>
            {letters.map(l =>
                <span key={l.id} style={{ fontSize: "4rem" }} onClick={() => deleteLetter(l.id)}> {/* Use callback like this when you want to send data to some onClick function */}
                    {l.letter}
                </span>
            )} <br />
            <button onClick={addLetter}>Add Letter</button>
            <button onClick={allToX}>All to X</button>
        </div>
    )
}