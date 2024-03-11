// styles for this are in Lucky7.css

export default function Die({value, color = "green"}) {
    return(
        <div className="Die" style={{backgroundColor: color}}>
            {value}
        </div>
    )
}