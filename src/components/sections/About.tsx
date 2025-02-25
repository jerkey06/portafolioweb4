import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { ExperienceCard } from '../ui/ExperienceCard';
import { experiences } from '../../data/experiences';

interface AboutProps {
  id: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ id, contactRef }) => {
  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 opacity-80">
              <p>
                With over 5 years of experience in backend development, I specialize in building scalable distributed systems and microservices architectures. My journey in software development began with a deep fascination for solving complex problems and has evolved into a passion for creating robust, efficient systems.
              </p>
              <p>
                I have extensive experience working with various technologies and frameworks, particularly in the Node.js and Python ecosystems. My expertise includes designing and implementing high-performance APIs, managing distributed databases, and orchestrating cloud infrastructure.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6">Experience</h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          <div ref={contactRef} className="space-y-6">
            <div className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:john.doe@example.com"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Mail size={20} />
                  <span>john.doe@example.com</span>
                </a>
                <a 
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Github size={20} />
                  <span>@johndoe</span>
                </a>
                <a 
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Linkedin size={20} />
                  <span>John Doe</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <div className="flex items-center space-x-3">
                <Calendar size={20} />
                <span className="text-green-500 font-bold">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};