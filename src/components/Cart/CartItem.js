import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <span className="item-name">{props.name}</span>
      <div className="pqdiv">
        <span className="price">${props.price}</span>
        <div className="quantity">x{props.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
