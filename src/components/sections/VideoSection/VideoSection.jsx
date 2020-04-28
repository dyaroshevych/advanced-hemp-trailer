import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

import { Section, Wrapper } from "../../../hoc";
import { PopupSlider, Button } from "../../UI";

import "./VideoSection.scss";
import * as videos from "../../../assets/img/videos";

const VideoSection = () => {
  const toggleVideoPlayer = ({ isVisible = true, activeIdx = 0 }) => {
    setVideoPlayer({ isVisible: isVisible, activeIdx: activeIdx });
  };

  const [videoPlayer, setVideoPlayer] = useState({
    isVisible: false,
    activeIdx: 0,
  });

  return (
    <Section className="VideoSection">
      <Wrapper>
        <h2>Hear what farmers are saying about our product!</h2>
        <Button size="lg" color="green" onClick={toggleVideoPlayer}>
          Play Video
          <FaPlay className="VideoSection_buttonIcon" />
        </Button>
      </Wrapper>
      <PopupSlider
        isVisible={videoPlayer.isVisible}
        toggleVisibility={toggleVideoPlayer}
        slides={Object.values(videos).map((url, idx) => (
          <ReactPlayer
            key={idx}
            {...{ url }}
            controls={true}
            playing={videoPlayer.activeIdx === idx && videoPlayer.isVisible}
          />
        ))}
        activeIdx={videoPlayer.activeIdx}
      ></PopupSlider>
    </Section>
  );
};

export default VideoSection;
