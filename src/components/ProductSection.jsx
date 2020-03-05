import React from "react";

import { SectionHeading } from "./";
import { Fade } from "react-reveal";
import { FaPlus } from "react-icons/fa";

const ProductSection = ({ data, setGallery }) => {
  const toggleGallery = (idx = 0) => {
    setGallery({ isOpened: true, activeIdx: idx });
  };

  return (
    <section className="section product">
      <div className="wrapper">
        <SectionHeading {...data} />
        <div className="product__content">
          {data.images.map((image, idx) => (
            <Fade key={idx} delay={idx * 300} bottom>
              <div
                className="product__image-container"
                onClick={() => toggleGallery(idx)}
              >
                <div className="product__image-open-button">
                  <FaPlus />
                </div>
                <img
                  src={image}
                  alt={`product ${idx}`}
                  className="product__image"
                />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
