import React from "react";
import Card from "../UI/Card/Card";
import MealsDescription from "./MealsDescription";
import "./AvailableMeals.css";

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

const AvailableMeals = () => {
  let mealsItem = DUMMY_MEALS.map((meal) => {
    return (
      <MealsDescription
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealsDescription>
    );
  });
  return <Card className="avail-meal-items">{mealsItem}</Card>;
};

export default AvailableMeals;
