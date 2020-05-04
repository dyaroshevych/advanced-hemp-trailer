import React, { useState } from "react";

import { Section, Wrapper } from "../../../hoc";
import { SectionHeading, PopupSlider, Image } from "../../UI";

import "./ProductSection.scss";
import * as images from "../../../assets/img/product";

const ProductSection = () => {
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
      <Section className="Product" id="product">
        <Wrapper>
          <SectionHeading
            heading="The Product"
            subheading="The Advanced Hemp Dryer is capable of drying a minimum of 2,000 plants in a 16-20 hour period. Our patented design is 53’ long, 100” wide, and has a 40% open drying floor. This creates an environment where conditioned air, NOT HOT AIR, can dry the hemp in a uniform and efficient manor."
          />
          <div className="Product_content">
            {transformedImages.map((image, idx) => (
              <Image
                key={`Product${idx}`}
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
          <img key={idx} src={image} alt={`Product preview ${idx}`} />
        ))}
      />
    </>
  );
};

export default ProductSection;
