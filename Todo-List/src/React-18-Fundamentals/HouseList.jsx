
const houses = [
    { id: 1, address: "Mitra Sucura, Vogosca", country: "BiH", price: 300000 },
    { id: 2, address: "Osjek bb, Ilidza", country: "BiH", price: 420000 }
]
export default function HouseList() {
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
                    {houses.map((h) => {
                        return (
                            <tr key={h.id}>
                                <td>{h.address}</td>
                                <td>{h.country}</td>
                                <td>{h.price}</td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </>
    )
}