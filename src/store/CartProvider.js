import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const addItemToCartHandler = (item) => {
    let idx = items.findIndex((ele) => {
      return ele.id === item.id;
    });
    let existingItem = items[idx];
    if (existingItem) {
      let obj = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      items[idx] = obj;
      setItem([...items]);
    } else {
      setItem([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    let idx = items.findIndex((ele) => {
      return ele.id === id;
    });
    let existingItem = items[idx];
    if (existingItem.quantity === 1) {
      items.splice(idx, 1);
      setItem([...items]);
    } else {
      let obj = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      items[idx] = obj;
      setItem([...items]);
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
