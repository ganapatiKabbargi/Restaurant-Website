import React from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import "./Cart.css";

const Cart = (props) => {
  return (
    <Modal>
      <h3>Sushi</h3>
      <div className="details">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="buttons">
        <button className="close-btn ">Close</button>
        <button className="order-btn ">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
