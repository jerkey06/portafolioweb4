import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { ExperienceCard } from '../ui/ExperienceCard';
import { experiences } from '../../data/experiences';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AboutProps {
  id: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ id, contactRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="md:col-span-2"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="space-y-4 opacity-80"
            >
              <p>
                I am a junior programmer passionate about technology and developing innovative solutions. My training and my experiences in personal and collaborative projects have allowed me to acquire solid knowledge in languages such as Python, JavaScript and web development tools. I enjoy solving technical challenges and continually learning, which drives me to explore new technologies and agile methodologies that enhance the quality and efficiency of my projects.
              </p>
              <p>
                Committed to constant learning, I strive to transform ideas into functional and aesthetic applications, always focused on usability and the user experience. I am excited to be part of collaborative teams where I can bring my creativity and energy, while continuing to grow professionally in the dynamic world of software development.
              </p>
            </motion.div>

            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mt-8 mb-6"
            >
              Experience
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              className="space-y-4"
            >
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            ref={contactRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.div 
              variants={contactCardVariants}
              whileHover={{ y: -5 }}
              className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold mb-4"
              >
                Contact Information
              </motion.h3>
              <motion.div 
                variants={containerVariants}
                className="space-y-4"
              >
                <motion.a 
                  variants={linkVariants}
                  whileHover="hover"
                  href="mailto:contactojkemi@gmail.com"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Mail size={20} />
                  <span>contacto@gmail.com</span>
                </motion.a>
                <motion.a 
                  variants={linkVariants}
                  whileHover="hover"
                  href="github.com/jerkey06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Github size={20} />
                  <span>@jerkey06</span>
                </motion.a>
                <motion.a 
                  variants={linkVariants}
                  whileHover="hover"
                  href="https://linkedin.com/in/emilianoponceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                >
                  <Linkedin size={20} />
                  <span>Emiliano Ponce</span>
                </motion.a>
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <MapPin size={20} />
                  <span>Leon, Gto</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={contactCardVariants}
              whileHover={{ y: -5 }}
              className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold mb-4"
              >
                Availability
              </motion.h3>
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <Calendar size={20} />
                <span className="text-green-500 font-bold">Available for Projects</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};