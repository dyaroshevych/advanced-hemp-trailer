import React, { useState } from "react";

import { SectionHeading } from "./";
import { Fade } from "react-reveal";
import Gallery from "./Gallery";

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
    <section className="section about">
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
            <Fade key={idx} delay={idx * 100} bottom>
              <div
                className="about__image"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => toggleImageGallery({ activeIdx: idx })}
              ></div>
            </Fade>
          ))}
        </div>
      </div>
      <Gallery
        items={about.images.map((image, idx) => (
          <img key={idx} src={image} alt={`About preview ${idx}`} />
        ))}
        info={imageGallery}
        setGallery={toggleImageGallery}
      />
    </section>
  );
};

export default AboutSection;
