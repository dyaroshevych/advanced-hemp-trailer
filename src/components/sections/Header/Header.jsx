import React from "react";
import { Fade } from "react-reveal";

import { Section, Wrapper } from "../../../hoc";

import "./Header.scss";
import { headerBgJpg } from "../../../assets/img";

const Header = () => (
  <Section
    className="Header"
    id="header"
    style={{ backgroundImage: `url(${headerBgJpg})` }}
  >
    <div className="Header_container">
      <div className="Header_background"></div>
      <Wrapper className="Header_textContainer">
        <Fade up>
          <h1>A New and Advanced Hemp Drying System is here</h1>
        </Fade>
      </Wrapper>
    </div>
  </Section>
);

export default Header;
