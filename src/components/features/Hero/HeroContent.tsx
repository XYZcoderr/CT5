import React, { useCallback } from 'react';
import { Rocket, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { triggerConfetti } from '../../../utils/confetti';
import { VideoSection } from './VideoSection';
import { TrustedCompanies } from './TrustedCompanies';

export const HeroContent = () => {
  const handleStartLearning = useCallback(() => {
    triggerConfetti();
  }, []);

  return (
    <section className="relative min-h-[90vh] pt-0 sm:pt-16 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-12 lg:pt-0"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-blue-900/50 text-yellow-400 rounded-full 
                          text-sm font-medium border border-blue-800/50 backdrop-blur-sm"
              >
                <span onClick={() => {
                  const faces = ['😊', '🤓', '🤪', '😎', '🥳', '🤗', '😄', '🦄'];
                  const face = faces[Math.floor(Math.random() * faces.length)];
                  const div = document.createElement('div');
                  div.style.position = 'fixed';
                  div.style.inset = '0';
                  div.style.backgroundColor = 'rgba(0,0,0,0.8)';
                  div.style.display = 'grid';
                  div.style.placeItems = 'center';
                  div.style.fontSize = '15rem';
                  div.style.zIndex = '100';
                  div.textContent = face;
                  document.body.appendChild(div);
                  setTimeout(() => div.remove(), 1000);
                }}>
                  Coding Matlab Coding Thinker
                </span>
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Unlock Your
                </span>
                <span className="text-yellow-400 inline-block animate-float">
                  Coding Potential
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Transform your future with our innovative coding education platform. 
                Learn from industry experts and join a community of passionate developers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartLearning}
                className="group relative inline-flex items-center justify-center px-8 py-3 
                          overflow-hidden rounded-lg bg-yellow-400 text-blue-900 font-semibold
                          hover:bg-yellow-500 transition-all duration-300
                          focus:ring-2 focus:ring-yellow-400/50 focus:outline-none"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Learning
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3
                          overflow-hidden rounded-lg border-2 border-yellow-400 text-yellow-400
                          hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300
                          focus:ring-2 focus:ring-yellow-400/50 focus:outline-none"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Video/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative -mt-8 lg:-mt-16"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              <div className="relative">
                <VideoSection videoId="dQw4w9WgXcQ" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <TrustedCompanies />
    </section>
  );
};