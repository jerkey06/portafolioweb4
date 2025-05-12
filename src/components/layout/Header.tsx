import React, { useContext, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (ref: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItemVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full top-0 z-50 dark:bg-zinc-900 bg-zinc-50 border-b-4 border-current"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Emiliano Ponce G.
        </motion.h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            Home
          </motion.button>
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onNavigate('projects')} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            Projects
          </motion.button>
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onNavigate('about')} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            About
          </motion.button>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden flex items-center"
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-t border-current"
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            Home
          </motion.button>
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => { onNavigate('projects'); setIsOpen(false); }} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            Projects
          </motion.button>
          <motion.button 
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => { onNavigate('about'); setIsOpen(false); }} 
            className="hover:underline decoration-4 underline-offset-4"
          >
            About
          </motion.button>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.nav>
  );
};