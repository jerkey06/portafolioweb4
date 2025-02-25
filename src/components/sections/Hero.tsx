import React from 'react';
import { Terminal, Download } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-4">
              Backend<br />
              Developer &<br />
              System<br />
              Architect
            </h1>
            <p className="text-xl mb-8 opacity-80">
              Building robust, scalable, and efficient backend systems that power modern applications
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('projects')}
                className="neobrutalist-button bg-violet-400 text-zinc-900 px-6 py-3"
              >
                View Projects
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="neobrutalist-button bg-violet-300 text-zinc-900 px-6 py-3"
              >
                Contact Me
              </button>
              <button className="neobrutalist-button bg-violet-200 text-zinc-900 px-6 py-3 flex items-center space-x-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Terminal size={300} className="transform -rotate-6" />
          </div>
        </div>
      </div>
    </div>
  );
};