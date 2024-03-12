import "./Button.css"

export default function Button({clickFunc}) {
    return <button className="Button" onClick={clickFunc}>Roll</button>
}