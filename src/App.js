import React from "react";

import {
  Navigation,
  Header,
  VideoSection,
  AboutSection,
  ProductSection,
  HowItWorksSection,
  BenefitsSection,
  SupportSection
} from "./components";

import { about, product, howItWorks, benefits } from "./data";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navigation links={[product, howItWorks, benefits, about]} />
      <Header />
      <VideoSection />
      <ProductSection />
      <HowItWorksSection />
      <BenefitsSection />
      <AboutSection />
      <SupportSection />
    </div>
  );
};

export default App;
