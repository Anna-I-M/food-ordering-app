import CartContext from "./cart-context";

const CartProvider = (props) => {
    const additemHandler = (item) => {

    }

    const removeItemHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: additemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;