import React from "react";
import { Fade } from "react-reveal";

import Section from "../../../hoc/Section/Section";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";

import * as icons from "../../../assets/img/benefits/";

import "./BenefitsSection.scss";

const CONTENT = [
  {
    heading: "Scalability",
    description: `The Advanced Hemp Dryer is designed in a way to be both cost effective for smaller farmers, but also designed to be scalable for larger operations.`,
  },
  {
    heading: "Transportability",
    description: `Unlike industrial dryers, the Advanced Hemp Dryer can be transported with ease. Simply hook to the mobile unit and take it to the field where it can be easily loaded. Once loaded, return the unit back to your facility for drying. If you need to move the entire unit from one farm to another, simply load the dryer in the back of the mobile unit and take it to another farming operation down the road.
  `,
  },
  {
    heading: "High Quality Hemp",
    description: `Have full control over the drying process. Set the thermostat at your desired temperature to achieve the end product that you prefer for your operation/processor. Our design also allows for even drying across all of your hemp plants that are loaded in the Advanced Hemp Dryer.`,
  },
  {
    heading: "Durability",
    description: `The Advanced Hemp Dryer has an average shelf life of 15 years. This is the highest amongst all competitors. With minimal issues and maintenance cost, lose the headache of using other alternatives. Having been in the drying industry since 1995, we understand how to create a high-quality product that lasts!`,
  },
];

const BenefitsSection = () => {
  const transformedIcons = Object.values(icons);

  return (
    <Section className="Benefits" id="benefits">
      <SectionHeading heading="Our Benefits" />
      <Wrapper className="Benefits_content">
        {CONTENT.map(({ heading, description }, idx) => (
          <Fade key={idx} delay={idx * 100}>
            <div className="Benefits_item">
              <div className="Benefits_itemImageContainer">
                <img
                  className="Benefits_itemImage"
                  src={transformedIcons[idx]}
                  alt={heading}
                />
              </div>
              <div className="Benefits_itemTextContainer">
                <h4>{heading}</h4>
                <p>{description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </Wrapper>
    </Section>
  );
};

export default BenefitsSection;
