import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummry from "./components/Meals/MealsSummry";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartState, setCartState] = useState(false);
  return (
    <React.Fragment>
      {cartState && <Cart />}
      <Header></Header>
      <MealsSummry></MealsSummry>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
}

export default App;
