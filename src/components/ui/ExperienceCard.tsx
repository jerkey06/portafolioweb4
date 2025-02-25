import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-4 border-current shadow-neobrutalist mb-4">
      <button
        className="w-full p-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h4 className="text-xl font-bold">{experience.title}</h4>
          <p className="text-sm">{experience.company} | {experience.period}</p>
          <p className="mt-2">{experience.summary}</p>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 pt-0 border-t-4 border-current">
          <ul className="list-disc list-inside space-y-2">
            {experience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};