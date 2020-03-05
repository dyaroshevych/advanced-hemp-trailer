import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BenefitsSection from "./components/BenefitsSection";
import SupportSection from "./components/SupportSection";
import Gallery from "./components/Gallery";
import ReactPlayer from "react-player";

import data from "./data";

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
      <Navigation
        links={Object.keys(data).map(val => {
          return { id: val, name: data[val].name };
        })}
      />
      <Header setVideoPlayer={toggleVideoPlayer} />
      <ProductSection data={data.product} setGallery={setImageGallery} />
      <HowItWorksSection data={data.howItWorks} />
      <BenefitsSection data={data.benefits} />
      <SupportSection />
      <Gallery
        items={data.product.images.map((image, idx) => (
          <img src={image} alt={`Preview ${idx}`} />
        ))}
        info={imageGallery}
        setGallery={toggleImageGallery}
      />
      <Gallery
        items={data.videos.map(url => (
          <ReactPlayer url={url} controls={true} />
        ))}
        info={videoPlayer}
        setGallery={toggleVideoPlayer}
      />
    </div>
  );
};

export default App;
