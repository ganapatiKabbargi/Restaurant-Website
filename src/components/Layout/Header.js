import React from "react";
import CartButton from "./CartButton";
import "./Header.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h2>React Meals</h2>
        <CartButton />
      </header>
      <div className="img-div">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="food"
        ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
