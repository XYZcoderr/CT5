import React from 'react';
import { HeroText } from './HeroText';
import { AnimationCard } from './AnimationCard';
import { ParallaxBackground } from './ParallaxBackground';
import '../styles/animations.css';

export const HeroContent = () => {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroText />
          <AnimationCard />
        </div>
      </div>
    </div>
  );
};