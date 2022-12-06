import React from "react";
import "./MealDescription.css";

const MealsDescription = (props) => {
  return (
    <li className="meal">
      <div className="meal-description">
        <div className="food-name">{props.name}</div>
        <div className="food-description">{props.description}</div>
        <div className="food-price">${props.price}</div>
      </div>
      <div>
        <div>
          <span className="food-amount">Amount</span>
          <input type="number" value="1" min="0" step="1" />
        </div>
        <div className="btn-div">
          <button className="btn">+Add</button>
        </div>
      </div>
    </li>
  );
};

export default MealsDescription;
