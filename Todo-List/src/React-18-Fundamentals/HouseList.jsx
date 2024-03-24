import { useState } from "react"
import HouseRow from "./HouseRow"

const allHouses = [
    { id: 1, address: "Mitra Sucura, Vogosca", country: "BiH", price: 300000 },
    { id: 2, address: "Osjek bb, Ilidza", country: "BiH", price: 420000 }
]
export default function HouseList() {
    let [houses, setHouses] = useState(allHouses);

    function addHouse() {
        return setHouses(prevHouses => [
            ...prevHouses,
            {id:3, address: "Franjevacka 45, Sarajevo", country: "BiH", price: 550000}
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