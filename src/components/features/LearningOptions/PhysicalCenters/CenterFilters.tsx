import React from 'react';
import { Search } from 'lucide-react';
import { FilterOptions } from './types';

interface Props {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const CenterFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
  const cities = ['All', 'Bhopal', 'Indore', 'Jabalpur', 'Gwalior'];
  const courses = ['All', 'Full Stack', 'Data Science', 'UI/UX Design', 'DevOps'];
  const schedules = ['All', 'Morning', 'Afternoon', 'Evening', 'Weekend'];

  return (
    <div className="space-y-4 p-4 bg-primary-light rounded-lg border border-gray-800">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
        <input
          type="text"
          placeholder="Search centers..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary border border-gray-800 text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { value: filters.city, options: cities, label: 'City' },
          { value: filters.course, options: courses, label: 'Course' },
          { value: filters.schedule, options: schedules, label: 'Schedule' }
        ].map(({ value, options, label }) => (
          <div key={label}>
            <label className="block text-sm text-text-secondary mb-1">{label}</label>
            <select
              value={value}
              onChange={(e) => onFilterChange({ ...filters, [label.toLowerCase()]: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-primary border border-gray-800 text-text-primary focus:ring-2 focus:ring-accent/50 focus:outline-none"
            >
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};