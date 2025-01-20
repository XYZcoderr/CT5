import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="relative group p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-blue-900/50 rounded-xl backdrop-blur-xl border border-blue-700/50 -z-10"></div>
    <div className="bg-yellow-400/10 p-4 rounded-lg inline-block mb-4 group-hover:bg-yellow-400/20 transition-all duration-300">
      <Icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);