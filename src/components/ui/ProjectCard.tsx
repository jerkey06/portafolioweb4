import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border-4 border-current shadow-neobrutalist h-full bg-white dark:bg-zinc-800">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover mb-4 border-b-4 border-current"
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
            <span key={index} className="border-2 border-current px-3 py-1 bg-primary-dark text-white">
              {tech}
            </span>
          ))}
        </div>
        <div>
          <p>Role: {project.role}</p>
          <p>Year: {project.year}</p>
        </div>
      </div>
    </div>
  );
};