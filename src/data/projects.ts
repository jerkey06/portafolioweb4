import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Video Processor',
    description: 'A Python application that automatically processes video files to create concise edited versions by removing redundant content.',
    keyFeatures: [
      'Automatic voice detection in videos',
      'Audio transcription using multiple AI providers',
      'Smart content filtering using GPT-4 and DeepSeek Chat',
      'Automatic video compilation and editing',
      'Support for multiple formats (.mp4, .mov, .avi, .mkv)'
    ],
    technologies: ['Python', 'FFmpeg', 'OpenAI', 'DeepSeek', 'Gemmini'],
    role: 'Full Stack Developer',
    year: 2025,
    type: 'Machine Learning',
    level: 'Intermediate',
    image: '',
    githubUrl: 'https://github.com/jerkey06/video-processor',
  },
  {
    id: 2,
    title: 'Weather Time App',
    description: 'A modern web application that provides real-time weather information with an intuitive and attractive interface.',
    keyFeatures: [
      'Real-time weather forecasting',
      'City-based location search',
      'Detailed weather data visualization',
      'Responsive and modern interface',
      'Interactive temperature graphs'
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Weather API', 'Vercel'],
    role: 'Frontend Developer',
    year: 2024,
    type: 'Web Application',
    level: 'Intermediate',
    image: '',
    githubUrl: 'https://github.com/jerkey06/weather-time',
    projectUrl: 'https://weather-time-mauve.vercel.app/'
  },
  // Otros proyectos...
];
