import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../../data/experiences';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutProps {
  id: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ id, contactRef }) => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12">Experience Timeline</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-current transform md:-translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row items-start mb-12 md:even:flex-row-reverse"
              >
                {/* Timeline Point */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-current rounded-full transform md:-translate-x-1/2 mt-8"
                />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div 
                    className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(exp.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <motion.div
                          animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </motion.div>
                      </div>
                      <p className="text-sm mb-2">{exp.company} | {exp.period}</p>
                      <p className="mb-4">{exp.summary}</p>
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t-4 border-current pt-4 mt-4">
                            <h4 className="font-bold mb-2">Responsibilities:</h4>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              {exp.details.map((detail, idx) => (
                                <motion.li 
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                            <h4 className="font-bold mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="project-tag neobrutalist-border px-3 py-1"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
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