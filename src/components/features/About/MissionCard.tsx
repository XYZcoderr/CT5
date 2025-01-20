import React from 'react';
import { Target } from 'lucide-react';
import { GlowingCard } from '../../common';

export const MissionCard = () => {
  return (
    <GlowingCard className="h-full">
      <div className="flex flex-col items-center text-center h-full">
        <div className="bg-yellow-400/10 p-4 rounded-full mb-6">
          <Target className="w-8 h-8 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
        <p className="text-gray-300 leading-relaxed flex-grow">
          Our goal is to offer students from all backgrounds a welcoming and accepting 
          learning atmosphere. We believe in making quality education accessible to everyone, 
          fostering an inclusive community where every learner can thrive.
        </p>
      </div>
    </GlowingCard>
  );
};