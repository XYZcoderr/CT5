import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const StatItem: React.FC<StatItemProps> = ({ icon: Icon, title, description }) => (
  <div className="text-center transform hover:scale-105 transition-all duration-300">
    <div className="bg-yellow-400/10 p-3 rounded-lg inline-block mb-2 group hover:bg-yellow-400/20 transition-all duration-300">
      <Icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);