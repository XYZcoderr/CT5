import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-xl rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="absolute inset-0 bg-blue-950 rounded-xl -rotate-3 transition-transform group-hover:-rotate-6"></div>
            <img src="/logo.png" alt="Coding Thinker Logo" className="relative w-full h-full rounded-xl" />
          </div>
          <span className="text-yellow-400 font-bold text-xl">Coding Thinker</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#courses">Courses</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white hover:text-yellow-400 transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);