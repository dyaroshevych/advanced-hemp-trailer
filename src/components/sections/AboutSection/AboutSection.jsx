import React, { useState } from "react";
import { Fade } from "react-reveal";

import { Section, Wrapper } from "../../../hoc";
import { SectionHeading, PopupSlider, Image } from "../../UI";

import "./AboutSection.scss";
import * as images from "../../../assets/img/about";

const AboutSection = () => {
  const toggleImageGallery = ({ isVisible = true, activeIdx = 0 }) => {
    setImageGallery({ isVisible: isVisible, activeIdx: activeIdx });
  };

  const [imageGallery, setImageGallery] = useState({
    isVisible: false,
    activeIdx: 0,
  });

  const transformedImages = Object.values(images);

  return (
    <>
      <Section className="About" id="about">
        <SectionHeading heading="About Us" />
        <Wrapper className="About_content">
          <div className="About_textContainer">
            <Fade bottom>
              <p className="About_textParagraph">
                With over 100 combined years of experience producing
                agricultural machinery, Advanced Trailer and LMCAg Manufacturing
                have teamed up to create a new and advanced hemp drying solution
                for growers.
              </p>
            </Fade>
            <Fade delay={50} bottom>
              <p className="About_textParagraph">
                We are currently the largest supplier of processing machinery
                for the peanut, almond, and hazelnut industries. Tens of
                thousands of our drying units are in use currently and our track
                record speaks for itself. With our equipment in use in six
                different continents, we have cemented ourselves as the pinnacle
                of reliability.
              </p>
            </Fade>
          </div>
          <div className="About_imagesContainer">
            {transformedImages.map((image, idx) => (
              <Image
                key={`about_${idx}`}
                image={image}
                toggleGallery={toggleImageGallery}
                idx={idx}
              />
            ))}
          </div>
        </Wrapper>
      </Section>
      <PopupSlider
        isVisible={imageGallery.isVisible}
        toggleVisibility={toggleImageGallery}
        activeIdx={imageGallery.activeIdx}
        slides={transformedImages.map((image, idx) => (
          <img key={idx} src={image} alt={`About preview ${idx}`} />
        ))}
      />
    </>
  );
};

export default AboutSection;
