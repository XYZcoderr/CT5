import React from 'react';
import { Monitor, Users, Clock, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingCard } from '../../common';
import { itemVariants } from './animations';

const features = [
  {
    icon: Monitor,
    title: 'Interactive Classes',
    description: 'Live sessions with real-time interaction'
  },
  {
    icon: Users,
    title: 'Peer Learning',
    description: 'Collaborate with students worldwide'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace'
  },
  {
    icon: Laptop,
    title: 'Virtual Labs',
    description: 'Hands-on practice environment'
  }
];

export const OnlineLearning = ({ onCallbackRequest }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <GlowingCard>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400/10 p-3 rounded-lg">
              <Monitor className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Online Learning Platform</h3>
          </div>

          <p className="text-gray-300">
            Learn from anywhere with our interactive virtual classrooms. Get the same high-quality
            education and support as our physical centers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50 hover:border-yellow-400/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-yellow-400 mb-2" />
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </GlowingCard>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCallbackRequest}
          className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold
                   hover:bg-yellow-500 transition-all duration-300
                   focus:ring-4 focus:ring-yellow-400/50
                   shadow-lg hover:shadow-yellow-400/20"
        >
          Request Callback
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#start-learning'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold
                   hover:bg-blue-700 transition-all duration-300
                   focus:ring-4 focus:ring-blue-600/50
                   shadow-lg hover:shadow-blue-600/20"
        >
          Start Learning
        </motion.button>
      </div>
    </motion.div>
  );
};