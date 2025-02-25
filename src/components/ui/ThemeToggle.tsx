import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="border-4 border-current shadow-neobrutalist hover:shadow-neobrutalist-hover active:shadow-neobrutalist-active p-2 transition transform hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};