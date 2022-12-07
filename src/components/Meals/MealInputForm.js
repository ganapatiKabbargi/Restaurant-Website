import React, { useContext } from "react";
import Input from "../UI/Input/Input";
import CartContext from "../../store/cart-context";
import "./MealInputForm.css";

const MealInputForm = (props) => {
  const cartCtx = useContext(CartContext);

  const clickHandler = () => {
    let quantity = document.getElementById("amount_" + props.id).value;

    cartCtx.addItem({ ...props.item, quantity: +quantity });

    console.log(cartCtx);
  };

  return (
    <div>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <div className="btn-div">
        <button className="btn" onClick={clickHandler}>
          +Add
        </button>
      </div>
    </div>
  );
};

export default MealInputForm;
