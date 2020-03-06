import React from "react";

import {
  Navigation,
  Header,
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
      <Navigation links={[about, product, howItWorks, benefits]} />
      <Header />
      <AboutSection />
      <ProductSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SupportSection />
    </div>
  );
};

export default App;
