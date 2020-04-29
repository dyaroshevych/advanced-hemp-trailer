import React from "react";
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

  return (
    <Section className="VideoSection">
      <Wrapper>
        <h2>Hear what farmers are saying about our product!</h2>
        <div className="VideoSection_itemsContainer">
          {Object.values(videos).map((url, idx) => (
            <figure className="VideoSection_item" key={idx}>
              <ReactPlayer
                width={`${1110 / 3}px`}
                height="220px"
                {...{ url }}
                controls={true}
                playing={false}
                className="VideoSection_itemVideo"
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
