import { useEffect, useState } from "react";

export default function EffectCounter() {
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("");
    useEffect(() => {
        console.log("Effect was called!");
    }, [counter])
    function increment() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Add 1</button>
            <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
    )
}   