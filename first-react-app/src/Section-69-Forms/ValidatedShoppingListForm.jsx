import { useState } from "react"

export default function ValidatedShoppingListForm({add}) {

    let [formData, setFormData] = useState({ product: "", quantity: 0 });
    let [productIsValid, setProductIsValid] = useState(false);

    function validate(product) {
        if (product.length > 0) {
            setProductIsValid(true)
        } else {
            setProductIsValid(false)
        }
    }
    function handleChange(e) {
        if (e.target.name == "product") {
            validate(e.target.value);
        }
        setFormData(oldData => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (productIsValid) {
            add(formData);
            setFormData({product: "", quantity: 0});
            setProductIsValid(false);
        }
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
            {!productIsValid && <p style={{color: "red"}}>Product name can't be empty</p>}
            <label htmlFor="quantity">Quantity</label>
            <input type="number"
                id="quantity"
                placeholder="0"
                name="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button onClick={handleSubmit} disabled={!productIsValid}>Submit</button>
        </form>
    )
}