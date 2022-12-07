import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./CartButton.css";
const CartButton = (props) => {
  const cartCLickHandler = () => {
    props.onCartClick();
  };
  let quantity = 0;
  const cartCtx = useContext(CartContext);
  cartCtx.items.forEach((item) => {
    quantity = quantity + +item.quantity;
  });

  return (
    <button className="button" onClick={cartCLickHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">{quantity}</span>
    </button>
  );
};

export default CartButton;
