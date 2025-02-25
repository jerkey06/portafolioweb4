import React, { useContext } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';

interface HeaderProps {
  onNavigate: (ref: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <nav className="fixed w-full top-0 z-50 dark:bg-zinc-900 bg-zinc-50 border-b-4 border-current">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:underline decoration-4 underline-offset-4"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className="hover:underline decoration-4 underline-offset-4"
          >
            Projects
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="hover:underline decoration-4 underline-offset-4"
          >
            About
          </button>
          <button 
            onClick={() => onNavigate('blog')}
            className="hover:underline decoration-4 underline-offset-4"
          >
            Blog
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};