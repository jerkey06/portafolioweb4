import React, { useState } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectFilters.css';

export const Projects: React.FC<{ id: string }> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedYear, setSelectedYear] = useState('Any Year');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4); // Initially show 4 projects

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-xl opacity-80 mb-8">
          A collection of projects that I have carried out throughout my learning career.
        </p>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <div className="flex gap-4">
            <motion.input
              type="text"
              placeholder="Search projects..."
              className="flex-1 border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white neobrutalist-border neobrutalist-shadow transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 neobrutalist-border neobrutalist-shadow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={20} />
            </motion.button>
          </div>
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                key="filters"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.4, height: { duration: 0.5 } }}
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
                  <option>2023</option>
                  <option>2022</option>
                </select>
                <select
                  className="w-full md:w-auto custom-select bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-900 dark:text-white"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option>All Languages</option>
                  <option>JavaScript</option>
                  <option>TypeScript</option>
                  <option>Python</option>
                  <option>C#</option>
                  <option>PHP</option>
                  <option>Rust</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        <AnimatePresence>
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleShowMore}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
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
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 opacity-70"
        >
          <p>
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {filteredProjects.length !== projects.length && ` (filtered from ${projects.length} total)`}
          </p>
        </motion.div>
      </div>
    </div>
  );
};