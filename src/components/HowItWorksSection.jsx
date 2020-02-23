import React from "react";
import { Fade } from "react-reveal";
import SectionHeading from "./SectionHeading";

const HowItWorksSection = ({ data }) => (
  <section className="section how-it-works howItWorks">
    <SectionHeading name={data.name} subheading={data.subheading} />
    <div className="howItWorks__content wrapper">
      {data.process.map((item, idx) => (
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
);

export default HowItWorksSection;
