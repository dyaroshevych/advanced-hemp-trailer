import React from "react";
import { Fade } from "react-reveal";
import { FaPlus } from "react-icons/fa";

const Image = ({ image, toggleGallery, idx }) => (
  <Fade key={idx} delay={idx * 300} bottom>
    <div
      className="image-container"
      onClick={() => toggleGallery({ activeIdx: idx })}
    >
      <div className="image-open-button">
        <FaPlus />
      </div>
      <img src={image} alt={`product ${idx}`} className="image" />
    </div>
  </Fade>
);

export default Image;
