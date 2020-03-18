import React from "react";

const Button = ({
  shape = "square",
  size = "sm",
  color = "white",
  children = ""
}) => (
  <button
    className={`button button--${shape} button--${size} button--${color}`}
  >
    {children}
  </button>
);

export default Button;
