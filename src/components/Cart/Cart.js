import React, { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import CartItem from "../Cart/CartItem";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./Checkout";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [formIsOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://food-ordering-app-3c4a3-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }
    setIsSubmitting(false);
    setSuccessSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setFormOpen(true);
  };

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {formIsOpen && (
        <CheckoutForm onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!formIsOpen && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>
  const successSubmitModalContent = <React.Fragment>
    <p>Successfully sent the order!</p>
    <div className={styles.actions}>
      <button className={styles.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  </React.Fragment>

  return <Modal onClose={props.onClose}>
    {!isSubmitting && !successSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && successSubmit && successSubmitModalContent}
  </Modal>;
};

export default Cart;
