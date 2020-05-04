import React, { useState } from "react";
import ReactPlayer from "react-player";

import { Section, Wrapper } from "../../../hoc";

import "./VideoSection.scss";
import * as videos from "../../../assets/img/videos";

const VideoSection = () => {
  const captions = [
    "A Quality Product",
    "The Drying Process",
    "Why Advanced Hemp",
  ];

  const getVideoWidth = () =>
    window.innerWidth > 1240
      ? 1110 / 3
      : window.innerWidth > 960
      ? window.innerWidth / 3 - 45
      : window.innerWidth > 640
      ? window.innerWidth / 2 - 60
      : window.innerWidth - 60;

  const [videoWidth, setVideoWidth] = useState(getVideoWidth());

  window.onresize = () => {
    setVideoWidth(getVideoWidth());
  };

  return (
    <Section className="VideoSection">
      <Wrapper>
        <h2>Hear what farmers are saying about our product!</h2>
        <div className="VideoSection_itemsContainer">
          {Object.values(videos).map((url, idx) => (
            <figure className="VideoSection_item" key={idx}>
              <ReactPlayer
                width={videoWidth}
                height={videoWidth * 0.6}
                {...{ url }}
                controls={true}
                playing={false}
              />
              <figcaption className="VideoSection_itemCaption">
                {captions[idx]}
              </figcaption>
            </figure>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default VideoSection;
