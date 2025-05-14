import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { ExperienceCard } from '../ui/ExperienceCard';
import { experiences } from '../../data/experiences';
import { motion } from 'framer-motion';

interface AboutProps {
  id: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ id, contactRef }) => {
  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12">Experience Timeline</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-current transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-current rounded-full transform -translate-x-1/2"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm mb-2">{exp.company} | {exp.period}</p>
                    <p className="mb-4">{exp.summary}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 opacity-80">
              <p>
                I am a junior programmer passionate about technology and developing innovative solutions. My training and my experiences in personal and collaborative projects have allowed me to acquire solid knowledge in languages such as Python, JavaScript and web development tools. I enjoy solving technical challenges and continually learning, which drives me to explore new technologies and agile methodologies that enhance the quality and efficiency of my projects.</p>
              <p>
                Committed to constant learning, I strive to transform ideas into functional and aesthetic applications, always focused on usability and the user experience. I am excited to be part of collaborative teams where I can bring my creativity and energy, while continuing to grow professionally in the dynamic world of software development.
              </p>
            </div>
          </div>

          <div ref={contactRef} className="space-y-6">
            <div className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contactojkemi@gmail.com"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Mail size={20} />
                  <span>contacto@gmail.com</span>
                </a>
                <a 
                  href="github.com/jerkey06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Github size={20} />
                  <span>@jerkey06</span>
                </a>
                <a 
                  href="https://linkedin.com/in/emilianoponceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Linkedin size={20} />
                  <span>Emiliano Ponce</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} />
                  <span>Leon, Gto</span>
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