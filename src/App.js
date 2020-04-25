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

const App = () => {
  return (
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
};

export default App;
