import React from 'react';
import type { Project } from '../types';
import { SocialIcons } from '../constants';

interface ProjectCardProps {
  project: Project;
  style: React.CSSProperties;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, style, className = '' }) => {
  return (
    <div 
        className={`bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group transform transition-all duration-500 hover:shadow-2xl hover:border-primary-500/50 ${className}`}
        style={style}
    >
      <div className="overflow-hidden h-48">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors duration-300">{project.title}</h3>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors shrink-0 ml-4">
                {React.cloneElement(SocialIcons.github, { width: 22, height: 22 })}
            </a>
        </div>
        {project.status && (
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 self-start dark:bg-primary-900/50 dark:text-primary-300">{project.status}</span>
        )}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;