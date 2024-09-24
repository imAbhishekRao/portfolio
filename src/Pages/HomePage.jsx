import React from 'react';
import LandingPage from '../components/Home';
import Projects from '../components/Projects';
import AnimatedTooltipPreview from '../components/AnimatedTooltipPreview';

export default function HomePage() {
  return (
    <>
      {/* Fullscreen Landing Page */}
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <LandingPage />
      </div>

      {/* Projects Section */}
      <div style={{ padding: '0px 0' }}>
        <Projects />
      </div>
      <AnimatedTooltipPreview />
    </>


  );
}
