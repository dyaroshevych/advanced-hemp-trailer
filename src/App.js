import React from "react";

import {
  Navigation,
  Header,
  VideoSection,
  AboutSection,
  ProductSection,
  HowItWorksSection,
  BenefitsSection,
  SupportSection,
  Footer
} from "./components";

import { about, product, howItWorks, benefits } from "./data";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navigation links={[product, howItWorks, benefits, about]} />
      <Header />
      <ProductSection />
      <HowItWorksSection />
      <BenefitsSection />
      <VideoSection />
      <AboutSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default App;
