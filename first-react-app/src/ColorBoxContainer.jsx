import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

export default function ColorBoxContainer({colors}) {
    let boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes[i] = <ColorBox colors={colors} />   
    }
    return (
        <div className="ColorBoxContainer">
            {boxes}
        </div>
    )
}