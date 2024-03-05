export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const result = num1 === num2 ? "You win" : "You lose"; 
    return (
        <div>
            <h2>Dice roll</h2>
             <h3>{result}</h3> {/*If we use this way under then we don't need to define result variable */}
            <h3>{num1 === num2 ? "You win!" : "You lose!"}</h3>
            {/* Next two lines show how we can display h3 only if result is win, otherwise we don't need any h3 */}
            {num1 === num2 ? <h3>You win!</h3> : null}
            {num1 === num2 && <h3>You win!</h3>}
            <p>{num1}</p>
            <p>{num2}</p>
        </div>
    )
}