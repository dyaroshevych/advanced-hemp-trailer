import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

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

const App = () => (
  <div className="App">
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={[
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
        "rgba(110, 153, 65, 0.6)",
      ]}
      render={() => {
        return (
          <>
            <div id="fullpage-wrapper">
              <div className="section">
                <Navigation />
                <Header />
              </div>
              <div className="section">
                <ProductSection />
              </div>
              <div className="section">
                <HowItWorksSection />
              </div>
              <div className="section">
                <BenefitsSection />
              </div>
              <div className="section">
                <VideoSection />
              </div>
              <div className="section">
                <AboutSection />
              </div>
              <div className="section">
                <SupportSection />
                <Footer />
              </div>
            </div>
          </>
        );
      }}
    />
  </div>
);

export default App;
