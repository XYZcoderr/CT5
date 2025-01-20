import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const FooterInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 relative">
          <img 
            src="/coding-thinker-logo.png" 
            alt="Coding Thinker Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-yellow-400 font-bold text-lg">Coding Thinker</span>
      </div>
      
      <p className="text-gray-400">
        Empowering the next generation of developers through innovative education
        and hands-on learning experiences.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-400">
          <MapPin className="w-5 h-5 text-yellow-400" />
          <span>123 Tech Street, Silicon Valley, CA</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Mail className="w-5 h-5 text-yellow-400" />
          <a href="mailto:contact@codingthinker.com" className="hover:text-yellow-400 transition-colors">
            contact@codingthinker.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Phone className="w-5 h-5 text-yellow-400" />
          <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors">
            (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
};