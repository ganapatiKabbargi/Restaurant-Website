import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const addItemHandler = () => {
    ctx.addItem({ ...props, quantity: 1 });
  };

  const removeItemHandler = () => {
    ctx.removeItem(props.id);
  };

  return (
    <div className="cart-item">
      <span className="item-name">{props.name}</span>
      <div className="sub-div">
        <div className="pqdiv">
          <span className="price">${props.price}</span>
          <div className="quantity">x{props.quantity}</div>
        </div>
        <div className="control">
          <button className="add" onClick={removeItemHandler}>
            -
          </button>
          <button className="remove" onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
