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
  // Otros proyectos...
];
