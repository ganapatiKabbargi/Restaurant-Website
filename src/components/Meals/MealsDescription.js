import React from "react";
import MealInputForm from "./MealInputForm";
import "./MealsDescription.css";

const MealsDescription = (props) => {
  return (
    <li className="meal">
      <div className="meal-description">
        <div className="food-name">{props.name}</div>
        <div className="food-description">{props.description}</div>
        <div className="food-price">${props.price}</div>
      </div>
      <MealInputForm id={props.id} />
    </li>
  );
};

export default MealsDescription;
