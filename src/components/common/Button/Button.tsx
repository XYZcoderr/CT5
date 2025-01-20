import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  icon: Icon,
  children,
  className = ''
}) => {
  const baseStyles = "relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-accent text-primary hover:bg-accent-hover",
    secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-primary"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center justify-center">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
      </span>
    </button>
  );
};