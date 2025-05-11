import React from 'react';
import { Project } from '../../types';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="max-w-sm border-4 border-current shadow-neobrutalist bg-white dark:bg-zinc-800"
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover border-b-4 border-current"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-bold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside">
            {project.keyFeatures.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="project-tag neobrutalist-border px-3 py-1"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="mb-4">
          <p>Role: {project.role}</p>
          <p>Year: {project.year}</p>
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neobrutalist-button bg-white text-black dark:bg-zinc-700 dark:text-zinc-100 px-4 py-3 border-zinc-900 dark:border-zinc-100 shadow-neobrutalist hover:bg-zinc-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-zinc-700"
            >
              View Code
            </motion.a>
          )}
          {project.projectUrl && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neobrutalist-button bg-white text-black dark:bg-zinc-700 dark:text-zinc-100 px-4 py-3 border-zinc-900 dark:border-zinc-100 shadow-neobrutalist hover:bg-zinc-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-zinc-700"
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};