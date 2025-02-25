import { Project } from '../types';

export const projects: Project[] = [
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
  // Otros proyectos...
];

// 3. /src/data/experiences.ts
import { Experience } from '../types';

export const experiences: Experience[] = [
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
  // Otras experiencias...
];

// 4. /src/data/blogPosts.ts
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Implementing Microservices with Node.js',
    date: '2024-03-15',
    summary: 'A deep dive into building scalable microservices architecture',
    link: '#',
    type: 'blog'
  },
  // Otros posts...
];