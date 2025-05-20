import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Junior Frontend Developer',
    company: 'TechStart Solutions',
    period: '2023 - Present',
    summary: 'Developing modern web applications with React and TypeScript',
    details: [
      'Implemented responsive user interfaces using React and TailwindCSS',
      'Collaborated with the design team to create pixel-perfect components',
      'Improved application performance by 35% through code optimization',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'Jest']
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'Digital Innovators Inc',
    period: '2022 - 2023',
    summary: 'Gained hands-on experience in full-stack web development',
    details: [
      'Assisted in developing and maintaining client websites',
      'Created reusable components for the company\'s component library',
      'Learned and applied best practices in web development',
      'Participated in daily stand-ups and team meetings'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']
  },
  {
    id: 3,
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2021 - 2022',
    summary: 'Developed custom websites for small businesses',
    details: [
      'Built and deployed responsive websites for local businesses',
      'Managed client relationships and project timelines',
      'Implemented SEO best practices',
      'Provided maintenance and support for existing websites'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS']
  }
];