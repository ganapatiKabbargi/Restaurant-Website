import React from "react";
import Header from "./components/Layout/Header";
import MealsSummry from "./components/Meals/MealsSummry";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealsSummry></MealsSummry>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
}

export default App;
