import React, { useState } from "react";
import ReactPlayer from "react-player";

import { Section, Wrapper } from "../../../hoc";
import { Modal, Button } from "../../UI";

import "./VideoSection.scss";
import { videoMov } from "../../../assets/img";

const VideoSection = () => {
  const [videoPlayerOpened, setVideoPlayerOpened] = useState(false);

  const toggleVideoPlayer = () => {
    setVideoPlayerOpened(!videoPlayerOpened);
  };

  return (
    <Section className="VideoSection">
      <Wrapper>
        <h2>Hear what farmers are saying about our product!</h2>
        <Button size="lg" color="green" onClick={toggleVideoPlayer}>
          Play Video
        </Button>
      </Wrapper>
      <Modal isVisible={videoPlayerOpened} toggleVisibility={toggleVideoPlayer}>
        <ReactPlayer
          url={videoMov}
          controls={true}
          playing={videoPlayerOpened}
        />
      </Modal>
    </Section>
  );
};

export default VideoSection;
