import { useState } from "react"

export default function ShoppingListForm({add}) {

    let [formData, setFormData] = useState({ product: "", quantity: 0 });
    function handleChange(e) {
        setFormData(oldData => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        add(formData);
        setFormData({product: "", quantity: 0})
    }
    return (
        <form>
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