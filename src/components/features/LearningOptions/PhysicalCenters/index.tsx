import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumbs } from './Breadcrumbs';
import { CenterFilters } from './CenterFilters';
import { CenterCard } from './CenterCard';
import { LeadForm } from './LeadForm';
import { FilterOptions, Center } from './types';
import { centers } from '../../../../data/centers';

interface Props {
  onCenterSelect: (centerId: string) => void;
}

export const PhysicalCenters: React.FC<Props> = ({ onCenterSelect }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    course: 'All',
    schedule: 'All'
  });
  const [selectedCenter, setSelectedCenter] = useState<string>();

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  const filteredCenters = centers.filter(center => {
    if (filters.city !== 'All' && center.city !== filters.city) return false;
    // Add more filter logic here
    return true;
  });

  const breadcrumbSteps = [
    { label: 'Learning Options', href: '#learning-options' },
    { label: 'Physical Centers', href: selectedCenter ? '#' : undefined },
    ...(selectedCenter ? [{ label: 'Registration' }] : [])
  ];

  return (
    <div>
      <Breadcrumbs steps={breadcrumbSteps} />

      <AnimatePresence mode="wait">
        {selectedCenter ? (
          <LeadForm
            centerId={selectedCenter}
            onBack={() => setSelectedCenter(undefined)}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CenterFilters
              filters={filters}
              onFilterChange={setFilters}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredCenters.map((center) => (
                <CenterCard
                  key={center.id}
                  center={center}
                  onSelect={setSelectedCenter}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};