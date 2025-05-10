import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Filter } from 'lucide-react';

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
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="flex-1 border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2"
            >
              <Filter size={20} />
            </button>
          </div>
          
          <div className={`md:flex md:flex-wrap gap-4 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <select
              className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0"
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
              className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select
              className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white mb-2 md:mb-0"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>Any Year</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <select
              className="w-full md:w-auto border-4 border-current bg-white dark:bg-zinc-800 px-4 py-2 focus:outline-none text-zinc-900 dark:text-white"
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
          </div>
        </div>

        {/* Projects Slider */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          className="w-full"
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