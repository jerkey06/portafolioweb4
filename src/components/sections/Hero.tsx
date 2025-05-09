import React from 'react';
import { Terminal, Download } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Junior<br />
              Fullstack<br />
              Developer <br />
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-80">
              with a passion for building scalable and efficient systems.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center md:items-start">
              <button 
                onClick={() => onNavigate('projects')}
                className="neobrutalist-button bg-primary-DEFAULT text-white px-6 py-3"
              >
                View Projects
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="neobrutalist-button bg-secondary-DEFAULT text-white px-6 py-3"
              >
                Contact Me
              </button>
              <a 
                href="/public/cv/rwservlet.pdf" 
                download
                className="neobrutalist-button bg-accent-DEFAULT text-white px-6 py-3 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <Terminal size={200} className="transform -rotate-6" />
          </div>
        </div>
      </div>
    </div>
  );
};