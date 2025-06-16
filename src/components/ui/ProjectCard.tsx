import React from 'react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="w-full border-4 border-current shadow-neobrutalist bg-white dark:bg-zinc-800 overflow-hidden h-full flex flex-col"
    >
      <div className="overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover border-b-4 border-current"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4 flex-1">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-bold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            {project.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
            {project.keyFeatures.length > 3 && (
              <li className="text-sm opacity-70">
                +{project.keyFeatures.length - 3} more features
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="project-tag neobrutalist-border px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-tag neobrutalist-border px-2 py-1 text-xs opacity-70">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="mb-4 text-sm opacity-80">
          <p>Role: {project.role}</p>
          <p>Year: {project.year}</p>
        </div>
        
        <div className="flex gap-2 mt-auto">
          {project.githubUrl && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 neobrutalist-button bg-white text-black dark:bg-zinc-700 dark:text-zinc-100 px-3 py-2 border-zinc-900 dark:border-zinc-100 shadow-neobrutalist text-center text-sm"
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
              className="flex-1 neobrutalist-button bg-white text-black dark:bg-zinc-700 dark:text-zinc-100 px-3 py-2 border-zinc-900 dark:border-zinc-100 shadow-neobrutalist text-center text-sm"
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};