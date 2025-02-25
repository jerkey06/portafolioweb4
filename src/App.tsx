import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Terminal, Download, Mail, Github, Linkedin, MapPin, Calendar, ChevronDown, ChevronUp, Newspaper } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Project {
  id: number;
  title: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  year: number;
  type: string;
  level: string;
  image: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  summary: string;
  details: string[];
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  link: string;
  type: 'github' | 'linkedin' | 'blog';
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedYear, setSelectedYear] = useState('Any Year');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [openExperience, setOpenExperience] = useState<number | null>(null);

  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Backend Developer',
      company: 'Tech Company Inc.',
      period: '2021 - Present',
      summary: 'Led microservices architecture development with 40% performance improvement',
      details: [
        'Architected and implemented a distributed system handling 1M+ daily transactions',
        'Reduced system latency by 60% through optimized caching strategies',
        'Led a team of 5 developers and mentored 3 junior engineers',
        'Implemented automated CI/CD pipeline reducing deployment time by 70%',
        'Designed and maintained 15+ microservices using Node.js and Python'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'StartupTech',
      period: '2019 - 2021',
      summary: 'Built scalable APIs and real-time processing systems',
      details: [
        'Developed RESTful APIs serving 500k+ daily active users',
        'Implemented real-time data processing pipeline using Apache Kafka',
        'Reduced database query times by 80% through optimization',
        'Integrated third-party services and payment gateways',
        'Contributed to open-source projects in the Node.js ecosystem'
      ]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Microservices',
      description: 'A highly scalable e-commerce platform built with microservices architecture.',
      keyFeatures: [
        'Distributed transaction management',
        'Event-driven architecture',
        'Automated deployment pipeline',
        'Real-time inventory updates',
        'Load balancing and auto-scaling'
      ],
      technologies: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'RabbitMQ'],
      role: 'Lead Backend Developer',
      year: 2023,
      type: 'Microservices',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Real-time Chat System',
      description: 'A scalable real-time chat system supporting millions of concurrent connections.',
      keyFeatures: [
        'Message persistence',
        'Presence detection',
        'End-to-end encryption',
        'Message delivery status',
        'Group chat support'
      ],
      technologies: ['FastAPI', 'WebSocket', 'Redis', 'PostgreSQL'],
      role: 'Backend Developer',
      year: 2022,
      type: 'Real-time Systems',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics',
      description: 'Machine learning platform for real-time data analysis and predictions.',
      keyFeatures: [
        'Real-time processing',
        'ML model deployment',
        'Automated scaling',
        'Data visualization',
        'API integration'
      ],
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'GraphQL'],
      role: 'ML Engineer',
      year: 2023,
      type: 'Machine Learning',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Implementing Microservices with Node.js',
      date: '2024-03-15',
      summary: 'A deep dive into building scalable microservices architecture',
      link: '#',
      type: 'blog'
    },
    {
      id: 2,
      title: 'New Open Source Contribution',
      date: '2024-03-10',
      summary: 'Major feature contribution to popular Node.js framework',
      link: 'https://github.com/yourusername',
      type: 'github'
    },
    {
      id: 3,
      title: 'Speaking at Tech Conference',
      date: '2024-03-05',
      summary: 'Presenting on Modern Backend Architecture',
      link: 'https://linkedin.com/in/yourusername',
      type: 'linkedin'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || project.type === selectedType;
    const matchesLevel = selectedLevel === 'All Levels' || project.level === selectedLevel;
    const matchesYear = selectedYear === 'Any Year' || project.year.toString() === selectedYear;
    return matchesSearch && matchesType && matchesLevel && matchesYear;
  });

  const toggleExperience = (id: number) => {
    setOpenExperience(openExperience === id ? null : id);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 ${isDark ? 'bg-zinc-900' : 'bg-zinc-50'} border-b-4 border-current`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline decoration-4 underline-offset-4"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(projectsRef)}
              className="hover:underline decoration-4 underline-offset-4"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="hover:underline decoration-4 underline-offset-4"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(blogRef)}
              className="hover:underline decoration-4 underline-offset-4"
            >
              Blog
            </button>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="neobrutalist-button p-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center">
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-4">
                Backend<br />
                Developer &<br />
                System<br />
                Architect
              </h1>
              <p className="text-xl mb-8 opacity-80">
                Building robust, scalable, and efficient backend systems that power modern applications
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection(projectsRef)}
                  className="neobrutalist-button bg-violet-400 text-zinc-900 px-6 py-3"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="neobrutalist-button bg-violet-300 text-zinc-900 px-6 py-3"
                >
                  Contact Me
                </button>
                <button className="neobrutalist-button bg-violet-200 text-zinc-900 px-6 py-3 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Terminal size={300} className="transform -rotate-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl opacity-80 mb-8">
            A collection of projects showcasing my expertise in building scalable and efficient systems.
          </p>

          {/* Filters */}
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full neobrutalist-border bg-transparent px-4 py-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-4">
              <select
                className="neobrutalist-border bg-transparent px-4 py-2 focus:outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>All Types</option>
                <option>Microservices</option>
                <option>Real-time Systems</option>
                <option>Machine Learning</option>
              </select>
              <select
                className="neobrutalist-border bg-transparent px-4 py-2 focus:outline-none"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select
                className="neobrutalist-border bg-transparent px-4 py-2 focus:outline-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option>Any Year</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <select
                className="neobrutalist-border bg-transparent px-4 py-2 focus:outline-none"
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
                <div className="project-card neobrutalist-border h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 neobrutalist-border"
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
                    <div>
                      <p>Role: {project.role}</p>
                      <p>Year: {project.year}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Blog Section */}
      <div ref={blogRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Latest Updates</h2>
          
          {/* GitHub Contributions */}
          <div className="neobrutalist-border p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">GitHub Activity</h3>
            <GitHubCalendar 
              username="yourusername"
              colorScheme={isDark ? 'dark' : 'light'}
            />
          </div>

          {/* Blog Posts and Updates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neobrutalist-border p-6 hover:transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-2 mb-2">
                  {post.type === 'github' && <Github size={20} />}
                  {post.type === 'linkedin' && <Linkedin size={20} />}
                  {post.type === 'blog' && <Newspaper size={20} />}
                  <span className="text-sm opacity-80">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="opacity-80">{post.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 opacity-80">
                <p>
                  With over 5 years of experience in backend development, I specialize in building scalable distributed systems and microservices architectures. My journey in software development began with a deep fascination for solving complex problems and has evolved into a passion for creating robust, efficient systems.
                </p>
                <p>
                  I have extensive experience working with various technologies and frameworks, particularly in the Node.js and Python ecosystems. My expertise includes designing and implementing high-performance APIs, managing distributed databases, and orchestrating cloud infrastructure.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-6">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="experience-card neobrutalist-border">
                    <button
                      className="w-full p-4 flex justify-between items-center"
                      onClick={() => toggleExperience(exp.id)}
                    >
                      <div>
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <p className="text-sm">{exp.company} | {exp.period}</p>
                        <p className="mt-2">{exp.summary}</p>
                      </div>
                      {openExperience === exp.id ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div className={`accordion-content ${openExperience === exp.id ? 'open' : ''}`}>
                      <div className="p-4 pt-0 border-t-4 border-current">
                        <ul className="list-disc list-inside space-y-2">
                          {exp.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={contactRef} className="space-y-6">
              <div className="contact-card neobrutalist-border p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:john.doe@example.com"
                    className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                  >
                    <Mail size={20} />
                    <span>john.doe@example.com</span>
                  </a>
                  <a 
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                  >
                    <Github size={20} />
                    <span>@johndoe</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:underline decoration-4 underline-offset-4"
                  >
                    <Linkedin size={20} />
                    <span>John Doe</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="availability-card neobrutalist-border p-6">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <div className="flex items-center space-x-3">
                  <Calendar size={20} />
                  <span className="text-green-500 font-bold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;