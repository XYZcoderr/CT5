import React from 'react';
import { Star } from 'lucide-react';
import { GlowingCard } from '../../common';
import type { Testimonial } from '../../../data/testimonials';

type TestimonialCardProps = Testimonial;

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  quote,
  rating
}) => {
  return (
    <GlowingCard className="h-full transform transition-all duration-500 hover:scale-105">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-gray-400 text-sm">
                {role} at {company}
              </p>
            </div>
          </div>
          
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 transition-colors duration-300 ${
                  i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        <blockquote className="text-gray-300 italic leading-relaxed">
          "{quote}"
        </blockquote>
      </div>
    </GlowingCard>
  );
};