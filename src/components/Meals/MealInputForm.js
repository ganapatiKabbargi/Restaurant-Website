import React from "react";
import Input from "../UI/Input/Input";
import "./MealInputForm.css";

const MealInputForm = (props) => {
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
        <button className="btn">+Add</button>
      </div>
    </div>
  );
};

export default MealInputForm;
