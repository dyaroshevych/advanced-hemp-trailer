import React from "react";

import { Fade } from "react-reveal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = ({ items, info: { isOpened, activeIdx }, setGallery }) => {
  const closeGallery = () => {
    setGallery({
      isOpened: false,
      activeIdx: activeIdx
    });
  };

  const moveSlide = (event, shift) => {
    event.stopPropagation();
    activeIdx = activeIdx + shift;
    if (activeIdx < 0) {
      activeIdx = items.length - 1;
    }
    if (activeIdx > items.length - 1) {
      activeIdx = 0;
    }
    setGallery({
      isOpened: true,
      activeIdx: activeIdx
    });
  };

  return (
    <Fade duration={150} when={isOpened}>
      <div
        className={`gallery gallery--${isOpened ? "visible" : "hidden"}`}
        onClick={closeGallery}
      >
        <div className="gallery__controls">
          <button
            className="gallery__button"
            onClick={event => moveSlide(event, -1)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="gallery__button"
            onClick={event => moveSlide(event, 1)}
          >
            <FaChevronRight />
          </button>
        </div>
        <img
          className="gallery__item"
          src={items[activeIdx]}
          alt={`Preview ${activeIdx}`}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      </div>
    </Fade>
  );
};

export default Gallery;
