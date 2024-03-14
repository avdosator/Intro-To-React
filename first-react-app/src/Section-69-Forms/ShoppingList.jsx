import { useState } from "react"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"
import {v4 as uuid} from "uuid"

export default function ShoppingList() {
    const [products, setProducts] = useState([
        { id: uuid(), product: "Eggs", quantity: 20 },
        { id: uuid(), product: "Milk", quantity: 2 }
    ])
    function addToList(item) {
        setProducts(oldProducts => {
            return [...oldProducts, {
                ...item, id: uuid()
            }]
        })
    }
    return (
        <div>
            <ul>
                {products.map((p) => <li key={p.id}> {p.product} - {p.quantity} </li>)}
            </ul>
            <ValidatedShoppingListForm add={addToList} />
        </div>
    )
}