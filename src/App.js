import React, { lazy, Suspense } from "react";

import Navigation from "./components/sections/Navigation/Navigation";
import Header from "./components/sections/Header/Header";
import Spinner from "./components/UI/Spinner/Spinner";

import "./App.scss";

const AboutSection = lazy(() =>
  import("./components/sections/AboutSection/AboutSection")
);
const BenefitsSection = lazy(() =>
  import("./components/sections/BenefitsSection/BenefitsSection")
);
const Footer = lazy(() => import("./components/sections/Footer/Footer"));
const HowItWorksSection = lazy(() =>
  import("./components/sections/HowItWorksSection/HowItWorksSection")
);
const ProductSection = lazy(() =>
  import("./components/sections/ProductSection/ProductSection")
);
const SupportSection = lazy(() =>
  import("./components/sections/SupportSection/SupportSection")
);
const VideoSection = lazy(() =>
  import("./components/sections/VideoSection/VideoSection")
);

const App = () => (
  <div className="App">
    <Navigation />
    <Header />
    <Suspense fallback={<Spinner />}>
      <ProductSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <HowItWorksSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <BenefitsSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <VideoSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <AboutSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <SupportSection />
    </Suspense>
    <Suspense fallback={<Spinner />}>
      <Footer />
    </Suspense>
  </div>
);

export default App;
