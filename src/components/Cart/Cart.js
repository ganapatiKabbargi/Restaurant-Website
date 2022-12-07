import React from "react";
import Modal from "../UI/Modal/Modal";
import "./Cart.css";

const Cart = (props) => {
  const onClickHandler = () => {
    props.onCloseClick();
  };

  const backdropHandler = () => {
    props.onClickBackdrop();
  };
  return (
    <Modal onConfirm={backdropHandler}>
      <h3>Sushi</h3>
      <div className="details">
        <span>Total Amount</span>
        <span>35.62</span>
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
