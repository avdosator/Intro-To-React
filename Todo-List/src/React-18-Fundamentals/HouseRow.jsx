import currencyFormatter from "./currencyFormatter";

export default function HouseRow({ address, country, price }) {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
        </tr>
    )
}