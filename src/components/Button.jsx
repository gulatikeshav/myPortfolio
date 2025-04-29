import React from "react";

const Button = ({ type, onClick = () => {}, value, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
