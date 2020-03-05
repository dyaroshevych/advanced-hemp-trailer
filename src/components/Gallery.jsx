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

  const stopPropagation = event => {
    console.log("1");
    event.stopPropagation();
  };

  return (
    <Fade duration={150} when={isOpened}>
      <div
        className={`gallery gallery--${isOpened ? "visible" : "hidden"}`}
        onClick={closeGallery}
      >
        {items.length > 1 && (
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
        )}
        <div className="gallery__item" onClick={e => stopPropagation(e)}>
          {items[activeIdx]}
        </div>
      </div>
    </Fade>
  );
};

export default Gallery;
