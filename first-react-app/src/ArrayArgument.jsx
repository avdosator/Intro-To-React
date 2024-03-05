export default function ArrayArgument( {values} ) {
    const randIndex = Math.floor(Math.random() * values.length);
    const randElement = values[randIndex];
    return (
        <div>
            <h2>Values: {values}</h2>
            <h3>Random element: {randElement}</h3>
        </div>
    )
}