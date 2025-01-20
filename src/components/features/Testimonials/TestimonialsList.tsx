import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { testimonials } from '../../../data/testimonials';

export const TestimonialsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const canGoNext = currentIndex + 3 < testimonials.length;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="relative" ref={elementRef}>
      <div className="overflow-hidden px-1">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="w-full md:w-[calc(33.333%-1rem)] flex-shrink-0 transform transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateY(0)' 
                  : `translateY(${20 + index * 10}px)`
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          disabled={!canGoPrev}
          className={`p-2 rounded-full ${
            canGoPrev 
              ? 'bg-yellow-400 hover:bg-yellow-300 text-blue-900' 
              : 'bg-blue-800/50 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={!canGoNext}
          className={`p-2 rounded-full ${
            canGoNext 
              ? 'bg-yellow-400 hover:bg-yellow-300 text-blue-900' 
              : 'bg-blue-800/50 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};