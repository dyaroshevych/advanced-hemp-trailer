import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Modal from "../Modal/Modal";

import "./PopupSlider.scss";

const PopupSlider = ({ isVisible, toggleVisibility, slides, activeIdx }) => {
  const togglePopup = () => {
    toggleVisibility({
      isVisible: !isVisible,
      activeIdx: activeIdx,
    });
  };

  const moveSlide = (event, shift) => {
    event.stopPropagation();
    activeIdx = activeIdx + shift;
    if (activeIdx < 0) {
      activeIdx = slides.length - 1;
    }
    if (activeIdx > slides.length - 1) {
      activeIdx = 0;
    }
    toggleVisibility({
      isVisible: isVisible,
      activeIdx: activeIdx,
    });
  };

  return (
    <Modal {...{ isVisible }} toggleVisibility={togglePopup}>
      {slides.length > 1 && (
        <div className="PopupSlider_controls">
          <button
            className="PopupSlider_controlButton"
            aria-label="previous slide"
            onClick={(event) => moveSlide(event, -1)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="PopupSlider_controlButton"
            aria-label="next slide"
            onClick={(event) => moveSlide(event, 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      <div
        className="PopupSlider_item"
        onClick={(event) => event.stopPropagation()}
      >
        {slides[activeIdx]}
      </div>
    </Modal>
  );
};

export default PopupSlider;
