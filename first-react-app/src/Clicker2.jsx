export default function Clicker2({message, text}) {
    return (
        <button onClick={() => alert(message)}>{text}</button>
    )
}