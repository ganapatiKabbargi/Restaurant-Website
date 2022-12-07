import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummry from "./components/Meals/MealsSummry";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartOpenHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };
  const backdropCloseHAndler = () => {
    setCartState(false);
  };

  return (
    <CartProvider>
      {cartState && (
        <Cart
          onCloseClick={cartCloseHandler}
          onClickBackdrop={backdropCloseHAndler}
        />
      )}
      <Header onCartClick={cartOpenHandler}></Header>
      <MealsSummry></MealsSummry>
      <AvailableMeals></AvailableMeals>
    </CartProvider>
  );
}

export default App;
