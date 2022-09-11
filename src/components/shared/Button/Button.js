import React from "react";
import "./Button.css";

const Button = ({ children, type, isDisabled, onClick }) => {
  return (
    <button
      type={type}
      className={isDisabled ? "disabled" : "btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
