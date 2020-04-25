import React from "react";

import "./Wrapper.scss";

const Wrapper = ({ children, className }) => (
  <div className={["Wrapper", className].join(" ")}>{children}</div>
);

export default Wrapper;
