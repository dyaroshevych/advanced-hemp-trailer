import React from "react";

import "./Modal.scss";

import { Backdrop } from "../";

const Modal = ({ isVisible, toggleVisibility, children }) => {
  return (
    <>
      <Backdrop {...{ isVisible, toggleVisibility }} />
      <div className="Modal" isvisible={String(isVisible)}>
        <button
          className="Modal_closeButton"
          onClick={toggleVisibility}
        ></button>
        {children}
      </div>
    </>
  );
};

export default Modal;
