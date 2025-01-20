import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SectionHeader } from '../../common';
import { LearningModeToggle } from './LearningModeToggle';
import { PhysicalCenters } from './PhysicalCenters';
import { OnlineLearning } from './OnlineLearning';
import { CallbackModal } from './CallbackModal';

export const LearningOptionsSection = () => {
  const [mode, setMode] = useState<'online' | 'physical'>('physical');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCallbackRequest = (data: any) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  const handleStartLearning = () => {
    // Handle start learning action
    window.location.href = '#start-learning';
  };

  return (
    <section className="py-16 sm:py-24 relative" id="learning-options">
      <div className="container mx-auto px-4">
        <SectionHeader
          icon={MapPin}
          title="Choose Your Learning Path"
          description="Experience quality education through our flexible learning paths - in-person or online"
        />
        
        <div className="mt-8 sm:mt-12">
          <LearningModeToggle mode={mode} setMode={setMode} />
          
          <div className="mt-6 sm:mt-8">
            {mode === 'physical' ? (
              <PhysicalCenters onCallbackRequest={() => setIsModalOpen(true)} />
            ) : (
              <OnlineLearning 
                onCallbackRequest={() => setIsModalOpen(true)}
                onStartLearning={handleStartLearning}
              />
            )}
          </div>
        </div>
      </div>

      <CallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCallbackRequest}
      />
    </section>
  );
};