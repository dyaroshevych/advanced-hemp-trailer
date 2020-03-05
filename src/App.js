import React, { useState } from "react";

import {
  Navigation,
  Header,
  ProductSection,
  HowItWorksSection,
  BenefitsSection,
  SupportSection
} from "./components";
import Gallery from "./components/Gallery";
import ReactPlayer from "react-player";

import { videos, product, howItWorks, benefits } from "./data";

import "./App.scss";

const App = () => {
  const [imageGallery, setImageGallery] = useState({
    isOpened: false,
    activeIdx: 0
  });

  const [videoPlayer, setVideoPlayer] = useState({
    isOpened: false,
    activeIdx: 0
  });

  const toggleImageGallery = ({
    isOpened = !imageGallery.isOpened,
    activeIdx = 0
  }) => {
    setImageGallery({ isOpened: isOpened, activeIdx: activeIdx });
  };

  const toggleVideoPlayer = ({
    isOpened = !videoPlayer.isOpened,
    activeIdx = 0
  }) => {
    setVideoPlayer({ isOpened: isOpened, activeIdx: activeIdx });
  };

  return (
    <div className="App">
      <Navigation links={[product, howItWorks, benefits]} />
      <Header setVideoPlayer={toggleVideoPlayer} />
      <ProductSection data={product} setGallery={setImageGallery} />
      <HowItWorksSection data={howItWorks} />
      <BenefitsSection data={benefits} />
      <SupportSection />
      <Gallery
        items={product.images.map((image, idx) => (
          <img key={idx} src={image} alt={`Preview ${idx}`} />
        ))}
        info={imageGallery}
        setGallery={toggleImageGallery}
      />
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
  );
};

export default App;
