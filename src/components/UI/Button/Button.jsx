import React from "react";

import "./Button.scss";

const Button = ({
  shape = "square",
  size = "sm",
  color = "white",
  onClick,
  children = null,
}) => (
  <button
    className={`Button Button___${shape} Button___${size} Button___${color}`}
    {...{ onClick }}
  >
    {children}
  </button>
);

export default Button;
