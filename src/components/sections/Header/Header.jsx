import React from "react";
import { Fade } from "react-reveal";

import Section from "../../../hoc/Section/Section";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

import headerBgJpg from "../../../assets/img/header-bg.jpg";

import "./Header.scss";

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
          <span className="Header_textLeft">
            <Fade left duration={2000}>
              The Future of Hemp Drying
            </Fade>
          </span>
          <div className="Header_headingDivider"></div>
          <span className="Header_textRight">
            <Fade right duration={2000}>
              Has Arrived
            </Fade>
          </span>
        </h1>
      </Wrapper>
    </div>
  </Section>
);

export default Header;
