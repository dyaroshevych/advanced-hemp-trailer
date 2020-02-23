import React from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BenefitsSection from "./components/BenefitsSection";
import SupportSection from "./components/SupportSection";

import data from "./data";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navigation
        links={Object.keys(data).map(val => {
          return { id: val, name: data[val].name };
        })}
      />
      <Header />
      <ProductSection data={data.product} />
      <HowItWorksSection data={data.howItWorks} />
      <BenefitsSection data={data.benefits} />
      <SupportSection />
    </div>
  );
};

export default App;
