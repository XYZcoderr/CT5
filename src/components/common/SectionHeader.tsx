import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block bg-yellow-400/10 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-yellow-400" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          {title}
        </span>
      </h2>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
};