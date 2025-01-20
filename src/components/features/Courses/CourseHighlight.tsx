import React from 'react';
import { Button } from '../../common/Button/Button';
import { ArrowRight, Code2 } from 'lucide-react';

export const CourseHighlight = () => {
  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl" />
      <div className="relative grid md:grid-cols-2 gap-8 p-8 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-yellow-400/10 p-3 rounded-lg">
            <Code2 className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-3xl font-bold text-white">Full Stack Development</h3>
          <p className="text-gray-300">
            Master both frontend and backend development. Build complete web applications
            from scratch using modern technologies and best practices.
          </p>
          <ul className="space-y-3">
            {['React & Node.js', 'Database Design', 'API Development', 'DevOps Basics'].map((item) => (
              <li key={item} className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="primary" icon={ArrowRight}>
            Explore Course
          </Button>
        </div>
        <div className="relative aspect-square">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            alt="Full Stack Development"
            className="absolute inset-0 w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-xl" />
        </div>
      </div>
    </div>
  );
};