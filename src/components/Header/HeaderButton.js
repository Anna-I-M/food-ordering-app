import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <Fragment>
      <button
        type="button"
        className={styles.button}
        onClick={props.onClick}
      >
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
