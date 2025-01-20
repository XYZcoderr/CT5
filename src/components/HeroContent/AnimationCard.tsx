import React from 'react';
import Lottie from 'lottie-react';
import codingAnimation from '../../animations/coding-animation.json';
import { StatsCard } from '../StatsCard';
import { GlowingCard } from './GlowingCard';

export const AnimationCard = () => {
  return (
    <div className="relative parallax-bg" style={{ '--parallax-speed': '0.1' } as React.CSSProperties}>
      <GlowingCard>
        <div className="mb-8 relative group overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative transform group-hover:scale-105 transition-transform duration-700">
            <Lottie 
              animationData={codingAnimation} 
              className="w-full h-auto"
              loop={true}
            />
          </div>
        </div>
        <StatsCard />
      </GlowingCard>
    </div>
  );
};