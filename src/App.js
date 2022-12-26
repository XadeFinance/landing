import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopSection from "./components/TopSection";
import ExploreFeatures from "./components/ExploreFeatures";
import ExploreFeaturesMobile from "./components/ExploreFeaturesMobile";
import BottomSection from "./components/BottomSection";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Header />
      <TopSection />
      <ExploreFeatures />
      <ExploreFeaturesMobile />
      <BottomSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
