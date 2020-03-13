import React from "react";

import { SectionHeading } from "./";
import { Fade } from "react-reveal";

import { benefits } from "../data";

const BenefitsSection = () => (
  <div className="section-container benefits">
    <section className="section">
      <SectionHeading name={benefits.name} subheading={benefits.subheading} />
      <div className="benefits__content wrapper">
        {benefits.items.map((item, idx) => (
          <Fade
            key={idx}
            delay={Math.floor(idx / 2) * 200}
            left={!(idx % 2)}
            right={!!(idx % 2)}
          >
            <div className="benefits__item">
              <div className="benefits__item-image-container">
                <img
                  className="benefits__item-image"
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <div className="benefits__item-text-container">
                <h4 className="heading-quarternary">{item.name}</h4>
                <p className="paragraph">{item.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  </div>
);

export default BenefitsSection;
