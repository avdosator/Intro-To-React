import currencyFormatter from "./currencyFormatter";

function HouseRow({ address, country, price, showHouse }) {
    return (
        <tr onClick={showHouse}>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
        </tr>
    )
}

export default HouseRow;