import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const Projects: React.FC<{ id: string }> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedYear, setSelectedYear] = useState('Any Year');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');

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
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full border-4 border-current bg-transparent px-4 py-2 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap gap-4">
            <select
              className="border-4 border-current bg-transparent px-4 py-2 focus:outline-none"
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
              className="border-4 border-current bg-transparent px-4 py-2 focus:outline-none"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select
              className="border-4 border-current bg-transparent px-4 py-2 focus:outline-none"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>Any Year</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <select
              className="border-4 border-current bg-transparent px-4 py-2 focus:outline-none"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option>All Languages</option>
              <option>Node.js</option>
              <option>Python</option>
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
            <SwiperSlide key={project.id} style={{ width: '400px' }}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};