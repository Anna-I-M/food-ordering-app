import React, { Fragment } from "react";
import HeaderCart from "./HeaderCart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>ReactMeals</h2>
        <HeaderCart />
      </header>
      <div>
        <img
          src={require("../images/meals.jpg")}
          alt="Meals"
          className={styles["main-image"]}
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
