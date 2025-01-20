import React from 'react';
import { Eye } from 'lucide-react';
import { GlowingCard } from '../../common';

export const VisionCard = () => {
  return (
    <GlowingCard className="h-full">
      <div className="flex flex-col items-center text-center h-full">
        <div className="bg-yellow-400/10 p-4 rounded-full mb-6">
          <Eye className="w-8 h-8 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
        <p className="text-gray-300 leading-relaxed flex-grow">
          By offering individualized, creative, and successful coaching that helps students 
          meet their academic and personal goals, we aim to create a new standard in 
          technical education that prepares learners for real-world success.
        </p>
      </div>
    </GlowingCard>
  );
};