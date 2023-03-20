import React, { Fragment } from "react";
import style from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Fragment>
        <div className={style.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs.
      </p>
      </div>
    </Fragment>
  );
};

export default MealsSummary;
