import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import { Section, Wrapper } from "../../../hoc";

import "./VideoSection.scss";
import * as videos from "../../../assets/img/videos";

const data = [
  {
    caption: "A Quality Product",
    videoUrl: videos.video1Mp4,
    previewUrl: videos.preview1Jpg,
  },
  {
    caption: "The Drying Process",
    videoUrl: videos.video2Mp4,
    previewUrl: videos.preview2Jpg,
  },
  {
    caption: "Why Advanced Hemp",
    videoUrl: videos.video3Mp4,
    previewUrl: videos.preview3Jpg,
  },
];

const getVideoWidth = () =>
  window.innerWidth > 1240
    ? 370
    : window.innerWidth > 960
    ? window.innerWidth / 3 - 45
    : window.innerWidth > 640
    ? window.innerWidth / 2 - 60
    : window.innerWidth - 60;

const VideoSection = () => {
  const [videoWidth, setVideoWidth] = useState(getVideoWidth());

  useEffect(() => {
    window.onresize = () => {
      setVideoWidth(getVideoWidth());
    };
  }, []);

  return (
    <Section className="VideoSection">
      <Wrapper>
        <h2>Hear what farmers are saying about our product!</h2>
        <div className="VideoSection_itemsContainer">
          {data.map(({ caption, videoUrl, previewUrl }, idx) => (
            <figure className="VideoSection_item" key={idx}>
              <ReactPlayer
                width={videoWidth}
                height={videoWidth * 0.6}
                url={videoUrl}
                controls={true}
                playing={true}
                light={previewUrl}
              />
              <figcaption className="VideoSection_itemCaption">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default VideoSection;
