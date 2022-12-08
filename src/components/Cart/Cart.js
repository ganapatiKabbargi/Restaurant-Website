import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const onClickHandler = () => {
    props.onCloseClick();
  };

  const backdropHandler = () => {
    props.onClickBackdrop();
  };

  const ctx = useContext(CartContext);
  let total = 0;

  const cartItems = ctx.items.map((item) => {
    total = total + item.price * item.quantity;
    return (
      <CartItem
       id={item.id}
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      ></CartItem>
    );
  });

  return (
    <Modal onConfirm={backdropHandler}>
      {cartItems}
      <div className="details">
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className="buttons">
        <button className="close-btn " onClick={onClickHandler}>
          Close
        </button>
        <button className="order-btn ">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
