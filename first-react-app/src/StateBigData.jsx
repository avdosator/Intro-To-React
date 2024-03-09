import { useState } from "react";

function generateBigData() {
    console.log("This should be printed only once!!");
    return Array(5000);
}

export default function StateBigData() {
    let [data, setData] = useState(generateBigData); // generateBigData will only be called once
    return (
        <button onClick={() => setData(Math.random() * 5)}>Click me to re-render</button>
    )
}