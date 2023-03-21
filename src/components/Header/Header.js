import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img
          src={require("../images/meals.jpg")}
          alt="Table with meals"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
