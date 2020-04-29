import React from "react";

const ModalContext = React.createContext({
  modalOpened: false,
  toggleModalOpened: () => {},
});

export default ModalContext;
