import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BenefitsSection from "./components/BenefitsSection";
import SupportSection from "./components/SupportSection";
import Gallery from "./components/Gallery";

import data from "./data";

import "./App.scss";

const App = () => {
  const [imageGallery, setImageGallery] = useState({
    isOpened: false,
    activeIdx: 0
  });

  const changeImageGallery = ({ isOpened, activeIdx }) => {
    setImageGallery({ isOpened: isOpened, activeIdx: activeIdx });
  };

  return (
    <div className="App">
      <Navigation
        links={Object.keys(data).map(val => {
          return { id: val, name: data[val].name };
        })}
      />
      <Header />
      <ProductSection data={data.product} setGallery={setImageGallery} />
      <HowItWorksSection data={data.howItWorks} />
      <BenefitsSection data={data.benefits} />
      <SupportSection />
      <Gallery
        items={data.product.images}
        info={imageGallery}
        setGallery={changeImageGallery}
      />
    </div>
  );
};

export default App;
