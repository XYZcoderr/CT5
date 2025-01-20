import React from 'react';
import { Navbar, Footer } from './components/layout';
import {
  HeroContent,
  FeaturesSection,
  AboutSection,
  CoursesSection,
  TestimonialsSection,
  LearningOptionsSection,
  FaqSection
} from './components/features';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-light">
      <Navbar />
      <main>
        <HeroContent />
        <FeaturesSection />
        <LearningOptionsSection />
        <CoursesSection />
        <TestimonialsSection />
        <AboutSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;