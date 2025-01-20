import React from 'react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
      <div className="relative bg-blue-800/30 backdrop-blur-xl rounded-xl p-8 border border-blue-700/50">
        {children}
      </div>
    </div>
  );
};