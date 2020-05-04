import React from "react";

import { Section, Wrapper } from "../../../hoc";

import "./SupportSection.scss";
import { supportBgJpg, supportMobileBgJpg } from "../../../assets/img";

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
