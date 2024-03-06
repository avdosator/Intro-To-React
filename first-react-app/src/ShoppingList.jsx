import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => {
                return (
                    <ShoppingListItem 
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}
                    />
                    // <ShoppingListItem key={i.id} {...i} - We can also use spread operator if parameters have same names like arguments from here
                )
            })}
        </ul>
    )
}