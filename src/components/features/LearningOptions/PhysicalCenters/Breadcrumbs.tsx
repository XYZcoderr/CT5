import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface Props {
  steps: Array<{
    label: string;
    href?: string;
  }>;
}

export const Breadcrumbs: React.FC<Props> = ({ steps }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      <a href="/" className="text-gray-500 hover:text-yellow-500 dark:text-gray-400">
        <Home className="w-4 h-4" />
      </a>
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {step.href ? (
            <a 
              href={step.href}
              className="text-gray-500 hover:text-yellow-500 dark:text-gray-400"
            >
              {step.label}
            </a>
          ) : (
            <span className="text-gray-900 font-medium dark:text-white">
              {step.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};