import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./CartButton.css";
const CartButton = (props) => {
  const cartCLickHandler = () => {
    props.onCartClick();
  };
  return (
    <button className="button" onClick={cartCLickHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default CartButton;
