import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${className}`}>
      {children}
    </h1>
  );
};