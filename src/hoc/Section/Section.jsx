import React from "react";

import "./Section.scss";

const Section = ({ children, className, style }) => (
  <section className={["Section", className].join(" ")}>
    <div className="Section_content" {...{ style }}>
      {children}
    </div>
  </section>
);

export default Section;
