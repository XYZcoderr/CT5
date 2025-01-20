import React from 'react';
import { LucideIcon, Clock, Users, BookOpen } from 'lucide-react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  level: string;
  price: number;
  image: string;
  category: string;
  students: number;
  modules: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon: Icon,
  duration,
  level,
  price,
  image,
  students,
  modules
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-500 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="bg-blue-800/30 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-700/50 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="bg-yellow-400/10 p-2 rounded-lg">
              <Icon className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-blue-700/50">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">{students}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">{modules} modules</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">${price}</span>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};