import { useState } from "react"

export default function ShoppingListForm() {
    // let [formData, setFormData] = useState([
    //     {product: "Eggs", quantity: 20},
    //     {product: "Milk", quantity: 2}
    // ])
    let [formData, setFormData] = useState({ product: "", quantity: 0 });
    function handleChange(e) {
        setFormData(oldData => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit() {
        console.log(`${formData.product} - ${formData.quantity}`);
    }
    return (
        <form>
            <h1>{formData.product} - {formData.quantity}</h1>
            <label htmlFor="product">Product</label>
            <input type="text"
                id="product"
                placeholder="product"
                name="product"
                onChange={handleChange}
                value={formData.product}
            />
            <label htmlFor="quantity">Quantity</label>
            <input type="number"
                id="quantity"
                placeholder="0"
                name="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}