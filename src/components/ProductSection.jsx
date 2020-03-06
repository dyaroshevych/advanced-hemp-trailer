import React, { useState } from "react";

import { SectionHeading } from "./";
import { Fade } from "react-reveal";
import { FaPlus } from "react-icons/fa";
import Gallery from "./Gallery";

import { product } from "../data";

const ProductSection = () => {
  const toggleImageGallery = ({ isOpened = true, activeIdx = 0 }) => {
    setImageGallery({ isOpened: isOpened, activeIdx: activeIdx });
  };

  const [imageGallery, setImageGallery] = useState({
    isOpened: false,
    activeIdx: 0
  });

  return (
    <section className="section product">
      <div className="wrapper">
        <SectionHeading {...product} />
        <div className="product__content">
          {product.images.map((image, idx) => (
            <Fade key={idx} delay={idx * 300} bottom>
              <div
                className="product__image-container"
                onClick={() => toggleImageGallery({ activeIdx: idx })}
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

      <Gallery
        items={product.images.map((image, idx) => (
          <img key={idx} src={image} alt={`Product preview ${idx}`} />
        ))}
        info={imageGallery}
        setGallery={toggleImageGallery}
      />
    </section>
  );
};

export default ProductSection;
