import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectFilters.css';

export const Projects: React.FC<{ id: string }> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedYear, setSelectedYear] = useState('Any Year');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || project.type === selectedType;
    const matchesLevel = selectedLevel === 'All Levels' || project.level === selectedLevel;
    const matchesYear = selectedYear === 'Any Year' || project.year.toString() === selectedYear;
    return matchesSearch && matchesType && matchesLevel && matchesYear;
  });

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
          className="space-y-4 mb-8"
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
                <motion.select
                  className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0 neobrutalist-border neobrutalist-shadow transition-all custom-select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  whileFocus={{ scale: 1.03 }}
                >
                  <option className="custom-option">All Types</option>
                  <option className="custom-option">Microservices</option>
                  <option className="custom-option">Real-time Systems</option>
                  <option className="custom-option">Machine Learning</option>
                  <option className="custom-option">E-commerce</option>
                  <option className="custom-option">RESTful APIs</option>
                  <option className="custom-option">IoT Integrations</option>
                </motion.select>
                <motion.select
                  className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0 neobrutalist-border neobrutalist-shadow transition-all custom-select"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  whileFocus={{ scale: 1.03 }}
                >
                  <option className="custom-option">All Levels</option>
                  <option className="custom-option">Beginner</option>
                  <option className="custom-option">Intermediate</option>
                  <option className="custom-option">Advanced</option>
                </motion.select>
                <motion.select
                  className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0 neobrutalist-border neobrutalist-shadow transition-all custom-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  whileFocus={{ scale: 1.03 }}
                >
                  <option className="custom-option">Any Year</option>
                  <option className="custom-option">2023</option>
                  <option className="custom-option">2022</option>
                </motion.select>
                <motion.select
                  className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white neobrutalist-border neobrutalist-shadow transition-all custom-select"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  whileFocus={{ scale: 1.03 }}
                >
                  <option className="custom-option">All Languages</option>
                  <option className="custom-option">JavaScript</option>
                  <option className="custom-option">TypeScript</option>
                  <option className="custom-option">Python</option>
                  <option className="custom-option">C#</option>
                  <option className="custom-option">PHP</option>
                  <option className="custom-option">Rust</option>
                </motion.select>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Slider */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={32}
          className="!overflow-visible !pb-12"
        >
          {filteredProjects.map(project => (
            <SwiperSlide key={project.id} style={{ width: '300px', maxWidth: '100%' }}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};