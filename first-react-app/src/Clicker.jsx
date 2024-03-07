function handleClick() {
    alert("You clicked the button and triggered onClick event!");
}

export default function Clicker() {
    return(
        <div>
            <h2>Click the button</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}