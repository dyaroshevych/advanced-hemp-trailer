import React, { useState } from "react";

import { SectionHeading, Popup, Image } from "./";

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
    <div className="section-container product">
      <section className="section">
        <div className="wrapper">
          <SectionHeading {...product} />
          <div className="product__content">
            {product.images.map((image, idx) => (
              <Image
                key={`product_${idx}`}
                image={image}
                toggleGallery={toggleImageGallery}
                idx={idx}
              />
            ))}
          </div>
        </div>

        <Popup
          items={product.images.map((image, idx) => (
            <img key={idx} src={image} alt={`Product preview ${idx}`} />
          ))}
          info={imageGallery}
          setPopup={toggleImageGallery}
        />
      </section>
    </div>
  );
};

export default ProductSection;
