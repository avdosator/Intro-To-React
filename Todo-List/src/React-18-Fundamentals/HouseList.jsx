import { useEffect, useState } from "react"
import HouseRow from "./HouseRow"
import fakeFetch from "./fakeFetchFromApi";
import AddButton from "./AddButton";

export default function HouseList({showHouse}) {
    let [houses, setHouses] = useState([]);
    useEffect(() => {
        const fetchHouses = async() => {
            const houses = await fakeFetch();        
            setHouses(houses);
        }
        fetchHouses();
    }, []);

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
                    {houses.map((h) => <HouseRow key={h.id} {...h} showHouse={showHouse} />)}
                </tbody>
            </table>
            <AddButton add={addHouse}/>
        </>
    )
}