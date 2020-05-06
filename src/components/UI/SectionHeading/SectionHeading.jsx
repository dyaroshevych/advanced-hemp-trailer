import React from "react";
import { Fade } from "react-reveal";

import "./SectionHeading.scss";

const SectionHeading = ({ heading, subheading }) => (
  <div className="SectionHeading">
    <Fade bottom duration={500}>
      <>
        <h2>{heading}</h2>
        {subheading && <h6>{subheading}</h6>}
      </>
    </Fade>
  </div>
);

export default SectionHeading;
