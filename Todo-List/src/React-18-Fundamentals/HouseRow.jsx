import currencyFormatter from "./currencyFormatter";

function HouseRow({ house, selectHouse }) {
    function handleClick() {
        selectHouse(house);
    }
    return (
        <tr onClick={handleClick}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
}

export default HouseRow;