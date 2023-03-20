import React from "react";
// import Button from "../../UI/Button";
import styles from "./HeaderCart.module.css";

const HeaderCart = () => {
  return (
    <>
      <button type="button" className={styles["button"]}>
        <i
          src={require("../images/shopping-cart-solid.svg")}
          className={styles.icon}
        ></i>
        Your Cart
        <span className={styles.badge}>0</span>
      </button>
    </>
  );
};

export default HeaderCart;
