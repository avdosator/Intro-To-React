import { useState } from "react"

export default function Toggler() {
    let [isHappy, setIsHappy] = useState(true);
    function toggleIsHappy() {
        setIsHappy(!isHappy);
    }
    return (
        <p onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</p>
    )
}