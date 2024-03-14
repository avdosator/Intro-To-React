import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm"

export default function ShoppingList() {
    const [products, setProducts] = useState([
        { id: 1, product: "Eggs", quantity: 20 },
        { id: 2, product: "Milk", quantity: 2 }
    ])
    function addToList(item) {
        setProducts(oldProducts => {
            return [...oldProducts, {
                ...item, id: Math.floor(Math.random() * 100) + 1
            }]
        })
    }
    return (
        <div>
            <ul>
                {products.map((p) => <li key={p.id}> {p.product} - {p.quantity} </li>)}
            </ul>
            <ShoppingListForm add={addToList} />
        </div>
    )
}