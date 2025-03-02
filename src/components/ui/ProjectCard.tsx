import React from 'react';
import { Project } from '../../types';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-sm border-4 border-current shadow-neobrutalist bg-white dark:bg-zinc-800">
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
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tag neobrutalist-border px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <p>Role: {project.role}</p>
          <p>Year: {project.year}</p>
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neobrutalist-button bg-violet-300 text-zinc-900 px-4 py-3"
            >
              View Code
            </a>
          )}
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neobrutalist-button bg-violet-400 text-zinc-900 px-4 py-3"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
