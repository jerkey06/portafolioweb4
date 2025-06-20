import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  id: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ id, contactRef }) => {
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 opacity-80">
              <p>
                I am a junior programmer passionate about technology and developing innovative solutions. My training and my experiences in personal and collaborative projects have allowed me to acquire solid knowledge in languages such as Python, JavaScript and web development tools. I enjoy solving technical challenges and continually learning, which drives me to explore new technologies and agile methodologies that enhance the quality and efficiency of my projects.
              </p>
              <p>
                Committed to constant learning, I strive to transform ideas into functional and aesthetic applications, always focused on usability and the user experience. I am excited to be part of collaborative teams where I can bring my creativity and energy, while continuing to grow professionally in the dynamic world of software development.
              </p>
            </div>
          </div>

          <div ref={contactRef} className="space-y-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800"
            >
              <motion.h3 
                variants={contactVariants}
                custom={0}
                className="text-xl font-bold mb-4"
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:contactojkemi@gmail.com"
                  variants={contactVariants}
                  custom={1}
                  whileHover="hover"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4 group"
                >
                  <motion.div variants={iconVariants}>
                    <Mail size={20} className="group-hover:text-primary-light transition-colors duration-300" />
                  </motion.div>
                  <motion.span variants={linkVariants}>contacto@gmail.com</motion.span>
                </motion.a>
                <motion.a 
                  href="github.com/jerkey06"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={contactVariants}
                  custom={2}
                  whileHover="hover"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4 group"
                >
                  <motion.div variants={iconVariants}>
                    <Github size={20} className="group-hover:text-primary-light transition-colors duration-300" />
                  </motion.div>
                  <motion.span variants={linkVariants}>@jerkey06</motion.span>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/emilianoponceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={contactVariants}
                  custom={3}
                  whileHover="hover"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4 group"
                >
                  <motion.div variants={iconVariants}>
                    <Linkedin size={20} className="group-hover:text-primary-light transition-colors duration-300" />
                  </motion.div>
                  <motion.span variants={linkVariants}>Emiliano Ponce</motion.span>
                </motion.a>
                <motion.div 
                  variants={contactVariants}
                  custom={4}
                  className="flex items-center space-x-3"
                >
                  <motion.div variants={iconVariants} whileHover="hover">
                    <MapPin size={20} />
                  </motion.div>
                  <span>Leon, Gto</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contactVariants}
              custom={5}
              className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800"
            >
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Calendar size={20} />
                </motion.div>
                <span className="text-green-500 font-bold">Available for Projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};