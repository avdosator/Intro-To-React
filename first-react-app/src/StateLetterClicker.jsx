import { useState } from "react"

function pickLetter() {
    const letters = ["a", "b", "s", "z", "k", "x", "e"];
    return letters[Math.floor(Math.random() * letters.length)];
}

export default function StateLetterClicker() {
    const [letters, setLetters] = useState(["a"]);
    function addLetter() {
        const randLetter = pickLetter();
        setLetters(oldLetters => {
            return [...oldLetters, randLetter];
        })
    }
    return (
        <div style={{fontSize: "4rem"}}>
            {letters.map(l => <span>{l}</span>)} <br/>
            <button onClick={addLetter}>Add Letter</button>
        </div>
    )
}