import { useEffect, useState } from "react"
import HouseRow from "./HouseRow"
import fakeFetch from "./fakeFetchFromApi";

export default function HouseList() {
    let [houses, setHouses] = useState([]);
    useEffect(() => {
        const fetchHouses = async() => {
            const houses = await fakeFetch();        
            setHouses(houses);
        }
        fetchHouses();
    });

    function addHouse() {
        return setHouses(prevHouses => [
            ...prevHouses,
            {id: crypto.randomUUID(), address: "Franjevacka 45, Sarajevo", country: "BiH", price: 550000}
        ])
    }
    return (
        <>
            <div className="row mb-2">
                <h5 className="text-center" style={{ color: "coral" }}>Houses currently on the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => <HouseRow key={h.id} {...h} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add</button>
        </>
    )
}