import React from 'react';
import { MissionCard } from './MissionCard';
import { VisionCard } from './VisionCard';
import { AboutHeader } from './AboutHeader';

export const AboutSection = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <AboutHeader />
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <MissionCard />
          <VisionCard />
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card max-w-3xl mx-auto p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              About Coding Thinker
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A coaching and training facility that aids in the growth and development of your skills. 
              Each course consists of five to six modules, as well as a mini and major project that 
              prepares you for the workplace. The all new courses Data Science with Python and Full 
              Stack Development are here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};