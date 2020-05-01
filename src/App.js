import React from "react";

import {
  AboutSection,
  BenefitsSection,
  Navigation,
  Header,
  HowItWorksSection,
  ProductSection,
  SupportSection,
  VideoSection,
  Footer,
} from "./components/sections";

import "./App.scss";

const App = () => (
  <div className="App">
    <Navigation />
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

export default App;
