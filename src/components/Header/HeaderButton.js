import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderButton.module.css";

const HeaderCartButton = () => {
  return (
      <button type="button" className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>0</span>
      </button>
  );
};

export default HeaderCartButton;
