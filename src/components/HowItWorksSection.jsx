import React from "react";

import { SectionHeading } from "./";
import { Fade } from "react-reveal";

import { howItWorks } from "../data";

const HowItWorksSection = () => (
  <div className="section-container how-it-works howItWorks">
    <section className="section">
      <SectionHeading
        name={howItWorks.name}
        subheading={howItWorks.subheading}
      />
      <div className="howItWorks__content wrapper">
        {howItWorks.process.map((item, idx) => (
          <Fade key={idx} delay={idx * 200} bottom>
            <div className="howItWorks__item">
              <img
                className="howItWorks__item-image"
                src={item.icon}
                alt={item.name}
              />
              <h3 className="heading-tertiary">{item.name}</h3>
              <p className="paragraph">{item.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  </div>
);

export default HowItWorksSection;
