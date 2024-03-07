import { useState } from "react";

export default function Counter() {

    //watch out to not use const here because it will be changed
    let [num, setNum] = useState(0);

    function incrementNum() {
        setNum(num += 1);
    }
    return (
        <div>
            <p>Counter is {num}</p>
            <button onClick={incrementNum}>+</button>
        </div>
    )
}



// we can't increment num and render it after that like this

// export default function Counter() {
//     let num = 0;
//     function incrementNum() {
//         num += 1;
//         console.log(num);
//     }
//     return (
//         <div>
//             <p>Counter is {num}</p>
//             <button onClick={incrementNum}>+</button>
//         </div>
//     )
// }