import React from 'react';
import { GraduationCap } from 'lucide-react';

export const CoursesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block bg-yellow-400/10 p-4 rounded-full mb-6">
        <GraduationCap className="w-8 h-8 text-yellow-400" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          Master Your Skills
        </span>
      </h2>
      <p className="text-gray-300 text-lg">
        Choose from our comprehensive selection of courses designed to take you from beginner to professional.
        Each course includes hands-on projects and personalized mentoring.
      </p>
    </div>
  );
};