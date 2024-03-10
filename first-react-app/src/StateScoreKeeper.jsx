import { useState } from "react"

export default function StateScoreKeeper() {
    let [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    function p1AddScore() {
        setScores(oldScores => {
            return {...oldScores, p1Score: oldScores.p1Score + 1};
        });
    }
    function p2AddScore() {
        setScores(oldScores => {
            return {...oldScores, p2Score: oldScores.p2Score + 1};
        });
    }
    return (
        <div>
            <p> Player 1 score:{scores.p1Score}</p>
            <p> Player 2 score:{scores.p2Score}</p>
            <button onClick={p1AddScore}>Player 1 +</button>
            <button onClick={p2AddScore}>Player 2 +</button>
        </div>
    )
}