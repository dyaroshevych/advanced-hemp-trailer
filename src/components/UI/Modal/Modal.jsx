import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./Modal.scss";

const Modal = ({ isVisible, toggleVisibility, children }) => {
  return (
    <>
      <Backdrop {...{ isVisible, toggleVisibility }} />
      <div className="Modal" isvisible={String(isVisible)}>
        <button
          className="Modal_closeButton"
          aria-label="close popup"
          onClick={toggleVisibility}
        ></button>
        {children}
      </div>
    </>
  );
};

export default Modal;
