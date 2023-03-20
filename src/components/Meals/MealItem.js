import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../../UI/Button/Button';
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  let [amount, setAmount] = useState('');
  const addMealHandler = (event) => {
    event.preventDefault();
    return setAmount(Number(amount++));
  }
  
  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.meal.h3}>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <h2 className={styles.price}>${props.price}</h2>
      </div>
      <div>
      <Input></Input>
      <Button type="submit" onClick={addMealHandler}>+Add</Button>
      </div>
    </li>
  );
}

export default MealItem;