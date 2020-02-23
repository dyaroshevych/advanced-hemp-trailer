import React from "react";
import { Fade } from "react-reveal";
import SectionHeading from "./SectionHeading";

const ProductSection = ({ data }) => (
  <section className="section product">
    <div className="wrapper">
      <SectionHeading name={data.name} subheading={data.subheading} />
      <div className="product__content">
        {data.images.map((image, idx) => (
          <Fade key={idx} delay={idx * 300} bottom>
            <img
              src={image}
              alt={`product ${idx}`}
              className="product__content-image"
            />
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
