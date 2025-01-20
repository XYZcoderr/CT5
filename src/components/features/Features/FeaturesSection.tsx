import React from 'react';
import { Code2, Rocket, Users, Brain, Video, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Code2,
    title: 'Interactive Coding',
    description: 'Learn by doing with our interactive coding challenges and real-time feedback system.'
  },
  {
    icon: Rocket,
    title: 'Project-Based Learning',
    description: 'Build real-world projects that you can add to your portfolio and showcase to employers.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a thriving community of developers who help each other grow and succeed.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Personalized learning paths adapted to your skill level and learning style.'
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Weekly live coding sessions and Q&A with industry experts and mentors.'
  },
  {
    icon: Shield,
    title: 'Certification',
    description: 'Earn industry-recognized certificates upon completing course milestones.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/0 via-blue-900/50 to-blue-900/0"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Our Platform
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the features that make our platform the perfect choice for your coding journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};