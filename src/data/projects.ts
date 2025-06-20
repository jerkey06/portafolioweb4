import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Server TCP',
    description: 'A simple TCP server in Rust that listens for incoming connections, displays received messages, and implements a basic command protocol.',
    keyFeatures: [
      'Listens on all network interfaces (0.0.0.0) on port 8888',
      'Accepts multiple client connections',
      'Displays incoming messages in UTF-8 format',
      'Handles client disconnections gracefully',
      'Implements a simple command protocol with responses',
      'Built with pure Rust standard library (no external dependencies)'
    ],
    technologies: ['Rust', 'TCP', 'Networking'],
    role: 'Backend Developer',
    year: 2024,
    type: 'Networking',
    level: 'Beginner',
    image: 'https://www.cs.dartmouth.edu/~campbell/cs50/ethernet.jpg',
    githubUrl: 'https://github.com/jerkey06/TCP-server',
    projectUrl: '',
  },
  {
    id: 2,
    title: 'Video Processor',
    description: 'A Python application that automatically processes video files to create concise edited versions by removing redundant content.',
    keyFeatures: [
      'Automatic voice detection in videos',
      'Audio transcription using multiple AI providers',
      'Smart content filtering using GPT-4 and DeepSeek Chat',
      'Automatic video compilation and editing',
      'Support for multiple formats (.mp4, .mov, .avi, .mkv)',
      'Batch processing capabilities',
      'Custom filtering rules'
    ],
    technologies: ['Python', 'FFmpeg', 'OpenAI', 'DeepSeek', 'Gemmini', 'NumPy', 'Pandas'],
    role: 'Full Stack Developer',
    year: 2025,
    type: 'Machine Learning',
    level: 'Intermediate',
    image: 'https://github.com/jerkey06/video-processor/blob/main/assets/Logo.png?raw=true',
    githubUrl: 'https://github.com/jerkey06/video-processor',
  },
  {
    id: 3,
    title: 'Weather Time App',
    description: 'A modern web application that provides real-time weather information with an intuitive and attractive interface.',
    keyFeatures: [
      'Real-time weather forecasting',
      'City-based location search',
      'Detailed weather data visualization',
      'Responsive and modern interface',
      'Interactive temperature graphs',
      '7-day weather forecast',
      'Weather alerts and notifications'
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Weather API', 'Vercel', 'Chart.js', 'Axios'],
    role: 'Frontend Developer',
    year: 2024,
    type: 'Web Application',
    level: 'Intermediate',
    image: 'https://github.com/jerkey06/weather-time/blob/main/assets/Screenshot%202025-06-16%20150620.png?raw=true',
    githubUrl: 'https://github.com/jerkey06/weather-time',
    projectUrl: 'https://weather-time-mauve.vercel.app/'
  },
  {
    id: 4,
    title: 'TaskGestionAPI - Task Management API',
    description: 'A RESTful API built with .NET 9 for efficient CRUD operations for task management, featuring interactive API documentation via Swagger.',
    keyFeatures: [
      'Creation of new tasks',
      'Retrieval of all tasks',
      'Task retrieval by ID',
      'Updating existing tasks',
      'Deletion of tasks',
      'Interactive API documentation via Swagger'
    ],
    technologies: ['.NET 9', 'ASP.NET Core', 'Entity Framework Core', 'Swagger/OpenAPI', 'In-Memory Database'],
    role: 'Backend Developer',
    year: 2024,
    type: 'RESTful APIs',
    level: 'Intermediate',
    image: 'https://github.com/jerkey06/Task-Gestion-API/blob/main/assets/capture.png?raw=true',
    githubUrl: 'https://github.com/jerkey06/Task-Gestion-API'
  },
  {
    id: 5,
    title: 'Distributed Log Analyzer',
    description: 'A distributed log analysis system developed in Rust for robust, real-time processing and analytics of log data across multiple services.',
    keyFeatures: [
      'Distributed architecture with aggregation server and log dispatch client',
      'RESTful API for log ingestion, querying, and metrics',
      'Persistent storage using SQLite for efficient retrieval',
      'Real-time metrics and alerting system',
      'Error pattern detection with regular expressions',
      'Automated performance and error spike analysis',
      'Advanced filtering, keyword search, and pagination for queries',
      'Aggregated metrics and historical time series data',
      'CLI client for log submission, test data generation, and querying',
      'Highly concurrent and scalable design'
    ],
    technologies: [
      'Rust', 'Tokio', 'Axum', 'SQLite', 'SQLx', 'Serde', 'Chrono', 'UUID', 'Regex', 'DashMap', 'Tracing'
    ],
    role: 'Backend Developer',
    year: 2024,
    type: 'Distributed Systems',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/Distributed-Log-Analyzer',
    projectUrl: '',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
    keyFeatures: [
      'Responsive design',
      'Smooth scroll animations',
      'Project showcase',
      'Contact form integration',
      'SEO optimized',
      'Performance optimized',
      'Accessibility compliant'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Vite', 'EmailJS'],
    role: 'Frontend Developer',
    year: 2024,
    type: 'Web Application',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/portafolioweb4'
  }
];
