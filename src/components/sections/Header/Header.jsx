import React from "react";
import { Fade } from "react-reveal";

import { Section, Wrapper } from "../../../hoc";

import "./Header.scss";
import { headerBgJpg } from "../../../assets/img";

const Header = () => (
  <Section
    className="Header"
    id="header"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${headerBgJpg})`,
    }}
  >
    <div className="Header_container">
      <Wrapper className="Header_textContainer">
        <h1>
          <Fade left duration={2000} className="Header_textLeft">
            The Future of Hemp Drying
          </Fade>
          <div className="Header_headingDivider"></div>
          <div className="Header_textRight">
            <Fade right duration={2000}>
              Has Arrived
            </Fade>
          </div>
        </h1>
      </Wrapper>
    </div>
  </Section>
);

export default Header;
