import React, { useState } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC<{ id: string }> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedYear, setSelectedYear] = useState('Any Year');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || project.type === selectedType;
    const matchesLevel = selectedLevel === 'All Levels' || project.level === selectedLevel;
    const matchesYear = selectedYear === 'Any Year' || project.year.toString() === selectedYear;
    return matchesSearch && matchesType && matchesLevel && matchesYear;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-xl opacity-80 mb-8">
          A collection of projects that I have carried out throughout my learning career.
        </p>

        {/* Filters */}
        <div className="space-y-4 mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="flex-1 border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white neobrutalist-border neobrutalist-shadow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 neobrutalist-border neobrutalist-shadow"
            >
              <Filter size={20} />
            </button>
          </div>
          
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`md:flex md:flex-wrap gap-4 ${showFilters ? 'block' : 'hidden md:flex'}`}
              >
                <select
                  className="w-full md:w-auto custom-select bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-white"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>All Types</option>
                  <option>Microservices</option>
                  <option>Real-time Systems</option>
                  <option>Machine Learning</option>
                  <option>E-commerce</option>
                  <option>RESTful APIs</option>
                  <option>IoT Integrations</option>
                  <option>Web Application</option>
                </select>
                <select
                  className="w-full md:w-auto custom-select bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-white"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select
                  className="w-full md:w-auto custom-select bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-white"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option>Any Year</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <AnimatePresence>
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleShowMore}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="neobrutalist-button bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 flex items-center space-x-2 text-lg font-bold"
              >
                <span>Show More Projects</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Info */}
        <div className="text-center mt-8 opacity-70">
          <p>
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {filteredProjects.length !== projects.length && ` (filtered from ${projects.length} total)`}
          </p>
        </div>
      </div>
    </div>
  );
};