import { useState } from "react"
import "./ColorBox.css"

export default function ColorBox({colors}) {
    function pickColor() {
        const index = Math.floor(Math.random() * colors.length);
        const clr = colors[index];
        return clr;
    }

    let [color, setColor] = useState(pickColor());
    function changeColor() {
        setColor(pickColor());
    }
    return (
        <div className="ColorBox" 
        style={{backgroundColor: color}}
        onClick={changeColor}>

        </div>
    )
}