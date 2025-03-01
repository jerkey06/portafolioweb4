import React, { useContext, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (ref: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 dark:bg-zinc-900 bg-zinc-50 border-b-4 border-current">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Emiliano Ponce G.</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline decoration-4 underline-offset-4">
            Home
          </button>
          <button onClick={() => onNavigate('projects')} className="hover:underline decoration-4 underline-offset-4">
            Projects
          </button>
          <button onClick={() => onNavigate('about')} className="hover:underline decoration-4 underline-offset-4">
            About
          </button>
          {/*<button onClick={() => onNavigate('blog')} className="hover:underline decoration-4 underline-offset-4">
            Blog
          </button>*/}
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-zinc-50 dark:bg-zinc-900 border-t border-current flex flex-col items-center space-y-4 py-4">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="hover:underline decoration-4 underline-offset-4">
            Home
          </button>
          <button onClick={() => { onNavigate('projects'); setIsOpen(false); }} className="hover:underline decoration-4 underline-offset-4">
            Projects
          </button>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="hover:underline decoration-4 underline-offset-4">
            About
          </button>
          <button onClick={() => { onNavigate('blog'); setIsOpen(false); }} className="hover:underline decoration-4 underline-offset-4">
            Blog
          </button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};
