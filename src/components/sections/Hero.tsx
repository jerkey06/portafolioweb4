import React from 'react';
import { Terminal, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Junior<br />
              Fullstack<br />
              Developer <br />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mb-8"
            >
              with a passion for building scalable and efficient systems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 items-center md:items-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto neobrutalist-button bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3"
              >
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto neobrutalist-button bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 px-6 py-3"
              >
                Contact Me
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/public/cv/rwservlet.pdf" 
                download
                className="w-full sm:w-auto neobrutalist-button bg-zinc-700 dark:bg-zinc-300 text-white dark:text-zinc-900 px-6 py-3 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 hidden md:flex justify-center mt-10 md:mt-0"
          >
            <Terminal size={200} className="transform -rotate-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};