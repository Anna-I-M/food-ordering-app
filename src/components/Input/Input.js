import React from "react";
import style from "./Input.module.css";

const Input = (props) => {

  return <div className={style["input"]}>
    <label><h3>Amount</h3></label>
    <input type="number">{props.amount}</input>
  </div>;
};

export default Input;
