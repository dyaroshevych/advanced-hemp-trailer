import React from "react";

import "./Section.scss";

const Section = ({ children, className, id, style }) => (
  <section className={["Section", className].join(" ")} {...{ id }}>
    <div className="Section_content" {...{ style }}>
      {children}
    </div>
  </section>
);

export default Section;
