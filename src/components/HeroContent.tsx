import React from 'react';
import { Rocket, Play } from 'lucide-react';
import Lottie from 'lottie-react';
import codingAnimation from '../animations/coding-animation.json';
import { StatsCard } from './StatsCard'; // Add this import

export const HeroContent = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight relative">
            Unlock the{' '}
            <span className="text-yellow-400 inline-block animate-float">Mystery</span>
            <br />
            of Coding
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Transform your future with our innovative coding education platform. 
            Learn from industry experts and join a community of passionate developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Learning
            </button>
            <button className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-blue-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-700/50 transform hover:scale-[1.02] transition-all duration-500">
            <div className="mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Lottie 
                animationData={codingAnimation} 
                className="w-full h-auto rounded-lg"
                loop={true}
              />
            </div>
            <StatsCard />
          </div>
        </div>
      </div>
    </div>
  );
};