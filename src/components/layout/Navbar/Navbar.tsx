import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';
import { Button } from '../../common/Button/Button';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { PromoBanner } from './PromoBanner';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PromoBanner />
      <nav 
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <NavLink href="#courses">Courses</NavLink>
                <NavLink href="#learning-options">Learning Options</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <Button 
                variant="primary" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                aria-label="Get Started"
              >
                Get Started
              </Button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-blue-800/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <MobileNav />
    </>
  );
};