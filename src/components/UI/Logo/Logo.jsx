import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Logo.scss";
import { logoPng } from "../../../assets/img";

const Logo = () => (
  <ScrollLink
    activeClass="active"
    to="header"
    spy
    smooth
    duration={500}
    offset={-130}
  >
    <img src={logoPng} alt="Advanced Hemp Dryer" className="Logo" />
  </ScrollLink>
);

export default Logo;
