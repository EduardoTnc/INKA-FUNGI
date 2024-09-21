import React from "react";
import HeroSection from "./components/HeroSection.jsx";
import SetasSection from "./components/SetasSection.jsx";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import RevealAnimation from "./components/RevealAnimation";
import CursoSection from "./components/CursoSection";
import CommunitySection from "./components/CommunitySection";

import "./index.css";

function App() {
  return (
    <>
      <SmoothScrollProvider>
        <RevealAnimation />
        <HeroSection />
        <SetasSection />
        <CursoSection />
        <CommunitySection />
      </SmoothScrollProvider>
    </>
  );
}

export default App;
