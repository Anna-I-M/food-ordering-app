import React, { useState } from "react";
import MealItem from "./MealItem";
import Card from "../../UI/Card/Card.js";
import style from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const displayExpenses = (meal) => {
    setMeals(DUMMY_MEALS);
  };

  return (
    <React.Fragment>
      <Card className={style["meals"]}>
          <ul>
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
      </Card>
    </React.Fragment>
  );
};

export default AvailableMeals;
