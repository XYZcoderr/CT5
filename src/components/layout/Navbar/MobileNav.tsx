import React from 'react';
import { Home, BookOpen, MapPin, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemProps) => (
  <motion.a
    href={href}
    className="flex flex-col items-center gap-1 text-gray-400 relative group"
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative">
      {isActive && (
        <motion.div
          layoutId="bubble"
          className="absolute -inset-2 bg-yellow-400/20 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <Icon className={`w-6 h-6 relative ${isActive ? 'text-yellow-400' : 'group-hover:text-yellow-400'}`} />
    </div>
    <span className="text-xs font-medium">{label}</span>
  </motion.a>
);

export const MobileNav = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (id === 'centers') {
      const element = document.getElementById('learning-options');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { icon: Home, label: 'Home', href: '#', id: 'home' },
    { icon: BookOpen, label: 'Courses', href: '#courses', id: 'courses' },
    { icon: MapPin, label: 'Centers', href: '#learning-options', id: 'centers' },
    { icon: User, label: 'Profile', href: '#profile', id: 'profile' },
    { icon: Menu, label: 'Menu', href: '#menu', id: 'menu' },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-blue-950/95 backdrop-blur-lg border-t border-blue-900/50 md:hidden z-50"
    >
      <div className="flex items-center justify-around p-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            {...item}
            isActive={activeTab === item.id}
            onClick={() => handleNavClick(item.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}; 