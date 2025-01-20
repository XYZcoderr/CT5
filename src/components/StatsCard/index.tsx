import React from 'react';
import { Code2, Users, Brain } from 'lucide-react';
import { VideoCard } from './VideoCard';

export const StatsCard = () => {
  const stats = [
    { icon: Code2, title: '50+ Courses', description: 'Comprehensive Learning' },
    { icon: Users, title: '10k+ Students', description: 'Growing Community' },
    { icon: Brain, title: 'Expert Mentors', description: 'Industry Leaders' },
  ];

  return (
    <div>
      <VideoCard />
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-400/10 p-3 rounded-lg inline-block mb-2 group hover:bg-yellow-400/20 transition-all duration-300">
                <Icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold">{stat.title}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};