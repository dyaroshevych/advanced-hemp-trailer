import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ isVisible, toggleVisibility }) => (
  <div
    className="Backdrop"
    isvisible={String(isVisible)}
    onClick={toggleVisibility}
  ></div>
);

export default Backdrop;
