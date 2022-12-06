import React from "react";
import Card from "../UI/Card/Card";
import "./MealsSummary.css";

const MealsSummry = (props) => {
  return (
    <Card className="meals">
      <h2>Delicious Food Delivered To You</h2>
      <p>
        Choose your favorite meals from our broad selection of available meals
        and enjoy Delicious lunch or dinner at home
      </p>
      <br></br>
      <p>
        All our meals are cooked with high-quality ingredients and just-in-time
        and of course by experienced chef
      </p>
    </Card>
  );
};

export default MealsSummry;
