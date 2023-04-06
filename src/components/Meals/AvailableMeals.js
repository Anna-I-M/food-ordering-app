import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card/Card.js";
import style from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://food-ordering-app-3c4a3-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const loadedData = [];

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedData);
      setIsLoading(false);
    }

      fetchMeals().catch((err) => {
        setIsLoading(false);
        setError(err.message || "Something went wrong!");
      })
  }, []);

  if (isLoading) {
    return (
      <section className={style.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={style.mealsError}>
        <p>{error}</p>
      </section>
    );
  }
  return (
    <section className={style["meals"]}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
