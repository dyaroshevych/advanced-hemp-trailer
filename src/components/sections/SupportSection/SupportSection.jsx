import React from "react";

import Section from "../../../hoc/Section/Section";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

import "./SupportSection.scss";
import supportBgJpg from "../../../assets/img/support-bg.jpg";
import supportMobileBgJpg from "../../../assets/img/support-mobile-bg.jpg";

const SupportSection = () => (
  <Section
    className="Support"
    id="support"
    style={{
      backgroundImage: `url(${
        window.innerWidth > 800 ? supportBgJpg : supportMobileBgJpg
      })`,
    }}
    scrollable={false}
  >
    <Wrapper>
      <h3>everything in our company is american designed and built.</h3>
      <br />
      <h3>we proudly support our troops.</h3>
    </Wrapper>
  </Section>
);

export default SupportSection;
