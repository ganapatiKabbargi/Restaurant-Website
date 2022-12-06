import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./CartButton.css";
const CartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default CartButton;
