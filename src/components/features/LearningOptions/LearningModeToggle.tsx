import React from 'react';
import { Monitor, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  mode: 'online' | 'physical';
  setMode: (mode: 'online' | 'physical') => void;
}

export const LearningModeToggle: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      {[
        { id: 'physical', icon: MapPin, label: 'Physical Centers' },
        { id: 'online', icon: Monitor, label: 'Online Learning' }
      ].map(({ id, icon: Icon, label }) => (
        <motion.button
          key={id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMode(id as 'online' | 'physical')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            mode === id
              ? 'bg-accent text-primary'
              : 'bg-primary-light text-text-secondary hover:bg-primary-light/80'
          }`}
        >
          <Icon className="w-5 h-5" />
          {label}
        </motion.button>
      ))}
    </div>
  );
};