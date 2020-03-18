import React, { useState } from "react";
import ReactPlayer from "react-player";

import { Popup, Button } from "./";

import { videos } from "../data";

const VideoSection = () => {
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
    <div className="section-container">
      <div className="section video-section">
        <h2 className="heading-secondary">
          Hear what farmers are saying about our product!
        </h2>
        <div onClick={toggleVideoPlayer}>
          <Button size="lg" color="green">
            Play Video
          </Button>
        </div>
      </div>
      <Popup
        items={videos.map((url, idx) => (
          <ReactPlayer
            key={idx}
            url={url}
            controls={true}
            playing={videoPlayer.isOpened && videoPlayer.activeIdx === idx}
          />
        ))}
        info={videoPlayer}
        setPopup={toggleVideoPlayer}
      />
    </div>
  );
};

export default VideoSection;
