import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../../common/Button/Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '#courses', label: 'Courses' },
    { href: '#learning-options', label: 'Learning Options' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-primary z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-primary-light rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <nav className="flex-1 px-6 py-8 space-y-6">
                {menuItems.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="block text-lg text-white hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="p-6 border-t border-primary-light">
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};