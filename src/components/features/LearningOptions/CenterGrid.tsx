import React from 'react';
import { CenterCard } from './CenterCard';
import { motion } from 'framer-motion';

interface Center {
  id: string;
  city: string;
  address: string;
  timings: string;
  phone: string;
  mapsUrl: string;
  image: string;
}

interface CenterGridProps {
  centers: Center[];
  onCenterSelect: (centerId: string) => void;
}

export const CenterGrid: React.FC<CenterGridProps> = ({ centers, onCenterSelect }) => {
  return (
    <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:overflow-x-visible sm:pb-0 sm:px-0">
      <div className="flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-[calc(100vw-2rem)] sm:min-w-0">
        {centers.map((center) => (
          <div className="w-[85vw] sm:w-auto flex-shrink-0">
            <CenterCard
              key={center.id}
              center={center}
              onSelect={onCenterSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
};