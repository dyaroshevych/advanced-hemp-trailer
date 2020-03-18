import React from "react";
import { Fade } from "react-reveal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Popup = ({ items, info: { isOpened, activeIdx }, setPopup }) => {
  const closePopup = () => {
    setPopup({
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
    setPopup({
      isOpened: true,
      activeIdx: activeIdx
    });
  };

  const stopPropagation = event => {
    event.stopPropagation();
  };

  return (
    <Fade duration={150} when={isOpened}>
      <div
        className={`popup popup--${isOpened ? "visible" : "hidden"}`}
        onClick={closePopup}
      >
        {items.length > 1 && (
          <div className="popup__controls">
            <button
              className="popup__button"
              onClick={event => moveSlide(event, -1)}
            >
              <FaChevronLeft />
            </button>
            <button
              className="popup__button"
              onClick={event => moveSlide(event, 1)}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
        <div className="popup__item" onClick={e => stopPropagation(e)}>
          {items[activeIdx]}
        </div>
      </div>
    </Fade>
  );
};

export default Popup;
