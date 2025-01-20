import React, { useEffect } from 'react';

export const ParallaxBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty('--scroll-offset', `${scrolled * 0.5}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 animate-gradient bg-[length:400%_400%]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};