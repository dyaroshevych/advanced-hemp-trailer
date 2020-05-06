import React from "react";
import { Fade } from "react-reveal";
import { FaPlus } from "react-icons/fa";

import "./Image.scss";

const Image = ({ image, toggleGallery, idx }) => (
  <Fade key={idx} delay={idx * 200} duration={750} bottom>
    <div
      className="Image_container"
      onClick={() => toggleGallery({ activeIdx: idx })}
    >
      <div className="Image_openButton">
        <FaPlus />
      </div>
      <img src={image} alt={`product ${idx}`} className="Image" />
    </div>
  </Fade>
);

export default Image;
