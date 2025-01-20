import React from 'react';
import { TestimonialsList } from './TestimonialsList';
import { SectionHeader } from '../../common/SectionHeader';
import { MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-32 relative" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/0 via-blue-900/50 to-blue-900/0" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          icon={MessageSquareQuote}
          title="Student Success Stories"
          description="Hear from our graduates who have transformed their careers through our courses"
        />
        <TestimonialsList />
      </div>
    </section>
  );
};