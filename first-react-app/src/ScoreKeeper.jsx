import { useState } from "react"

export default function ScoreKeeper({numPlayers = 3, target = 5}) {
    const [scores, setScores] = useState(Array(numPlayers).fill(0));
    function increaseScore(index) {
        setScores(oldScores => {
            return oldScores.map((score, i) => {
                if(i === index) {
                    return score + 1;
                } else {
                    return score;
                }
            })
        })
    }
    function reset() {
        setScores(oldScores => oldScores.map((score) => 0))
    }
    return (
        <div>
            <ul>
                {scores.map((s, i) => {
                    return <li key={i}>
                        Player{i+1}: {s} 
                        <button onClick={() => increaseScore(i)}>+1</button>
                        {s >= target && "Winner!"}
                        </li>
                })}
            </ul> 
            <button onClick={reset}>Reset</button>
        </div>
    )
}