import React from "react";

import "./Logo.scss";
import { logoPng } from "../../../assets/img";

const Logo = () => (
  <img src={logoPng} alt="Advanced Hemp Dryer" className="Logo" />
);

export default Logo;
