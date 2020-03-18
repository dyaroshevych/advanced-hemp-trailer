import React, { useState } from "react";
import { Fade } from "react-reveal";

import { SectionHeading, Popup, Image } from "./";

import { about } from "../data";

const AboutSection = () => {
  const toggleImageGallery = ({ isOpened = true, activeIdx = 0 }) => {
    setImageGallery({ isOpened: isOpened, activeIdx: activeIdx });
  };

  const [imageGallery, setImageGallery] = useState({
    isOpened: false,
    activeIdx: 0
  });

  return (
    <div className="section-container about">
      <section className="section">
        <SectionHeading name={about.name} subheading={about.subheading} />
        <div className="about__content wrapper">
          <div className="about__text-container">
            {about.content.map((paragraph, idx) => (
              <Fade key={idx} delay={idx * 50} bottom>
                <p className="about__text-paragraph paragraph">{paragraph}</p>
              </Fade>
            ))}
          </div>
          <div className="about__image-container">
            {about.images.map((image, idx) => (
              <Image
                key={`about_${idx}`}
                image={image}
                toggleGallery={toggleImageGallery}
                idx={idx}
              />
            ))}
          </div>
        </div>
        <Popup
          items={about.images.map((image, idx) => (
            <img key={idx} src={image} alt={`About preview ${idx}`} />
          ))}
          info={imageGallery}
          setPopup={toggleImageGallery}
        />
      </section>
    </div>
  );
};

export default AboutSection;
