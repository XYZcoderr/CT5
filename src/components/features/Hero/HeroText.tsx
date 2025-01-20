import React, { useCallback } from 'react';
import { Rocket, Play } from 'lucide-react';
import { triggerConfetti } from '../../../utils/confetti';
import { useParallax } from '../../../hooks/useParallax';

export const HeroText = () => {
  const parallaxRef = useParallax({ speed: 0.2 });
  
  const handleStartLearning = useCallback(() => {
    triggerConfetti();

    const message = document.createElement('div');
    message.className = 'fixed top-4 right-4 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 opacity-0 translate-y-[-20px] z-50';
    message.textContent = 'You took a step forward to become a 10x developer! 🚀';
    document.body.appendChild(message);

    requestAnimationFrame(() => {
      message.style.opacity = '1';
      message.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      message.style.opacity = '0';
      message.style.transform = 'translateY(-20px)';
      setTimeout(() => message.remove(), 500);
    }, 3000);
  }, []);

  return (
    <div ref={parallaxRef} className="space-y-8 relative">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-shine bg-[length:200%_auto]">
          Unlock the
        </span>
        <span className="text-yellow-400 inline-block animate-float">Mystery</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          of Coding
        </span>
      </h1>
      
      <p className="text-lg text-gray-300 leading-relaxed">
        Transform your future with our innovative coding education platform. 
        Learn from industry experts and join a community of passionate developers.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={handleStartLearning}
          className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-transform duration-300 group-hover:scale-105" />
          <span className="relative flex items-center justify-center text-blue-900">
            <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Start Learning
          </span>
        </button>
        <button className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden">
          <div className="absolute inset-0 bg-transparent border-2 border-yellow-400 transition-all duration-300 group-hover:bg-yellow-400" />
          <span className="relative flex items-center justify-center text-yellow-400 group-hover:text-blue-900">
            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Watch Demo
          </span>
        </button>
      </div>
    </div>
  );
};