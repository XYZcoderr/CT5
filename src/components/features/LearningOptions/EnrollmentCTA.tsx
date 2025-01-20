import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../common';

export const EnrollmentCTA = () => {
  return (
    <div className="text-center mt-16">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Ready to Begin Your Learning Journey?
      </h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Choose the learning mode that best fits your schedule and preferences. Both options offer
        the same high-quality curriculum, expert instructors, and comprehensive support.
      </p>
      <div className="flex justify-center gap-4">
        <Button 
          variant="primary" 
          icon={ArrowRight}
          onClick={() => window.location.href = '#enroll-online'}
        >
          Enroll Online
        </Button>
        <Button 
          variant="secondary"
          icon={MapPin}
          onClick={() => window.location.href = '#visit-center'}
        >
          Visit a Center
        </Button>
      </div>
    </div>
  );
};