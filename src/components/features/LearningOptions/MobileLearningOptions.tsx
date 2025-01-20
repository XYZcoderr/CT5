import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Laptop } from 'lucide-react';

const options = [
  {
    id: 'physical',
    icon: MapPin,
    title: 'Physical Centers',
    description: 'Learn at our state-of-the-art facilities',
  },
  {
    id: 'online',
    icon: Laptop,
    title: 'Online Learning',
    description: 'Learn from anywhere, at your own pace',
  },
];

export const MobileLearningOptions = ({ onSelect, activeOption }) => {
  return (
    <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-4 min-w-max">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = activeOption === option.id;
          
          return (
            <motion.button
              key={option.id}
              onClick={() => onSelect(option.id)}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-start p-4 rounded-xl w-[260px]
                         border-2 transition-all duration-300 ${
                           isActive 
                           ? 'bg-yellow-400/10 border-yellow-400' 
                           : 'bg-blue-900/30 border-blue-800/50 hover:border-yellow-400/50'
                         }`}
            >
              <div className={`p-2 rounded-lg mb-3 ${
                isActive ? 'bg-yellow-400 text-blue-900' : 'bg-blue-800/50 text-yellow-400'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{option.title}</h3>
              <p className="text-sm text-gray-400">{option.description}</p>
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-yellow-400 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}; 