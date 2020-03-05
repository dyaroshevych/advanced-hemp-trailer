import React from "react";

import { Fade } from "react-reveal";

export default ({ name, subheading }) => (
  <div className="section__heading">
    <Fade bottom>
      <h2 className="heading-secondary">{name}</h2>
      <h6 className="subheading-secondary">{subheading}</h6>
    </Fade>
  </div>
);
