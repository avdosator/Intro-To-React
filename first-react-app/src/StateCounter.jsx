import { useState } from "react"

export default function StateCounter() {
    let [count, setCount] = useState(0);
    function addOne() {
        setCount(count + 1); // this will work normally
    }
    function addThree() {
        /*
        This won't work because count has same previous value until we call useState again (until re-rendering)
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */
        setCount(previousCount => previousCount + 1); // now react will send updated value to every previousCount
        setCount(previousCount => previousCount + 1);
        // console.log(count); count still has old value till we hit useState again, but previousCount is always updated
        setCount(previousCount => previousCount + 1);
    }
    function setToTen() {
        setCount(10); // when react see that previous state was 10 it will not re-render component because no changes happened
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>10</button>
        </div>
    )
}