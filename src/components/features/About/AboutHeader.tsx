import React from 'react';

export const AboutHeader = () => {
  return (
    <div className="text-center relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-10" />
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          Empowering
        </span>{' '}
        <span className="text-white">Your Journey</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        Discover how we're transforming tech education and building the next generation of developers
      </p>
    </div>
  );
};