import currencyFormatter from "./currencyFormatter";

function HouseRow({ address, country, price }) {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
        </tr>
    )
}

export default HouseRow;