import React from 'react';
import './TrustedCompanies.css';

const companies = [
  {
    name: 'Google',
    logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg',
  },
  {
    name: 'Apple',
    logo: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg',
  },
  {
    name: 'Amazon',
    logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg',
  },
  {
    name: 'Netflix',
    logo: 'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg',
  },
  // Add more companies as needed
];

const LogoRow = () => {
  return (
    <div className="animate-scroll hover:[animation-play-state:paused]">
      {[...companies, ...companies].map((company, index) => (
        <div key={`${company.name}-${index}`} className="logo-container">
          <img
            src={company.logo}
            alt={company.name}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-logo.svg'; // Fallback image
            }}
          />
        </div>
      ))}
    </div>
  );
};

export const TrustedCompanies = () => {
  return (
    <div className="w-full bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-300 text-lg mb-8">
          Trusted by leading companies worldwide
        </h3>

        <div className="relative overflow-hidden">
          {/* Left and right fading gradients */}
          <div className="fade-gradient fade-gradient-left"></div>
          <div className="fade-gradient fade-gradient-right"></div>

          {/* Single Logo Row */}
          <LogoRow />
        </div>
      </div>
    </div>
  );
};
