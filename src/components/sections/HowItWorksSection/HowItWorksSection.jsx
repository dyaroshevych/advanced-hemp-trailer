import React from "react";
import { Fade } from "react-reveal";

import Section from "../../../hoc/Section/Section";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";

import * as icons from "../../../assets/img/how-it-works/";

import "./HowItWorksSection.scss";

const HowItWorksSection = () => {
  const items = [
    {
      heading: "Load",
      description: `After harvesting all of your hemp plants, load the Advanced Hemp Dryer up to four feet high. Our design allows for easy loading and accessibility.`,
    },
    {
      heading: "Dry",
      description: `Once you have loaded all your hemp plants, attach the dryer which can be set to your preferred temperature. Let the dryer run during the day or over the night for your desired results.`,
    },
    {
      heading: "Repeat",
      description: `Once your hemp is dried, usually around 12-16 hours depending on the environment conditions, unload the Advanced Hemp Dryer and repeat the process.`,
    },
  ];

  const transformedIcons = Object.values(icons);

  return (
    <Section className="HowItWorks" id="how-it-works">
      <Wrapper>
        <SectionHeading
          heading="How it Works"
          subheading="The Advanced Hemp Dryer offers the highest technology for drying, all while being easy
  to use. The drying process is easy to teach to anyone!"
        />
        <div className="HowItWorks_content">
          {items.map(({ heading, description }, idx) => (
            <Fade key={idx} delay={idx * 200} duration={500}>
              <div className="HowItWorks_item">
                <img
                  className="HowItWorks_itemImage"
                  src={transformedIcons[idx]}
                  alt={heading}
                />
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default HowItWorksSection;
