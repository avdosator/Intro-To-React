import Box from "./Box";
import { useState } from "react"

export default function BoxGrid() {
    let [boxes, setBoxes] = useState(Array.from({length: 9}, () => false));
    function reset() {
        setBoxes(oldBoxes => oldBoxes.map((b) => false));
    }
    function toggleBox(index) {
        setBoxes(oldBoxes => oldBoxes.map((b, i) => {
            if(i === index) {
                return !b;
            } else {
                return b;
            }
        }))
    }
    return(
        <div className="BoxGrid">
        {boxes.map((b, i) => <Box key={i} isActive={b} toggle={() => toggleBox(i)} />)}
        <button onClick={reset}>Reset</button>
        </div>
    )
}