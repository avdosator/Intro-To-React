import PropTypes from 'prop-types'

function ShoppingListItem({ item, quantity, completed }) {
    const style = {color: completed ? "grey" : "red", textDecoration: completed ? "line-through" : "none"};
    return (
        <li style={style}>
            {item} - {quantity}
        </li>
    )
}

ShoppingListItem.propTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
}

export default ShoppingListItem;
