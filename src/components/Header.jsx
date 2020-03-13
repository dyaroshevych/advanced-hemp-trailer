import React, { useState } from "react";

import { Fade } from "react-reveal";
import ReactPlayer from "react-player";
import { Gallery } from "./";

import { videos } from "../data";

const Header = () => {
  const [videoPlayer, setVideoPlayer] = useState({
    isOpened: false,
    activeIdx: 0
  });

  const toggleVideoPlayer = ({
    isOpened = !videoPlayer.isOpened,
    activeIdx = 0
  }) => {
    setVideoPlayer({ isOpened: isOpened, activeIdx: activeIdx });
  };

  return (
    <Fade delay={250}>
      <div className="section-container">
        <header className="header">
          <div className="header__background"></div>
          <div className="header__container wrapper">
            <Fade up>
              <div className="header__text-container">
                <h1 className="heading-primary underlined">
                  A New and Advanced Hemp Drying System is here
                </h1>
                <div className="header__buttons-container">
                  <button
                    className="button button--green"
                    onClick={toggleVideoPlayer}
                  >
                    Play Video
                  </button>
                  <button className="button button--gray">Buy Now</button>
                </div>
              </div>
            </Fade>
          </div>
        </header>
        <Gallery
          items={videos.map((url, idx) => (
            <ReactPlayer
              key={idx}
              url={url}
              controls={true}
              playing={videoPlayer.isOpened && videoPlayer.activeIdx === idx}
            />
          ))}
          info={videoPlayer}
          setGallery={toggleVideoPlayer}
        />
      </div>
    </Fade>
  );
};

export default Header;
