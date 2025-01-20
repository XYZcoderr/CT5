import React from 'react';

export const Logo = () => (
  <div className="flex items-center space-x-3 group">
    <div className="relative w-10 h-10 md:w-12 md:h-12">
      <img 
        src="/coding-thinker-logo.png" 
        alt="Coding Thinker Logo"
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <span className="text-yellow-400 font-bold text-lg md:text-xl lg:text-2xl tracking-tight">
      Coding Thinker
    </span>
  </div>
);