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
    image: 'https://raw.githubusercontent.com/yourusername/server-tcp/main/assets/server-tcp.png',
    githubUrl: 'https://github.com/yourusername/server-tcp',
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
    image: 'public/videoProcessor.png',
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
    image: 'public/image2.png',
    githubUrl: 'https://github.com/jerkey06/weather-time',
    projectUrl: 'https://weather-time-mauve.vercel.app/'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with modern design, secure payments, and comprehensive admin dashboard.',
    keyFeatures: [
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'User authentication and profiles',
      'Order management system',
      'Payment integration with Stripe',
      'Admin dashboard for inventory',
      'Email notifications'
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth', 'TailwindCSS'],
    role: 'Full Stack Developer',
    year: 2024,
    type: 'E-commerce',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/ecommerce-platform',
  },
  {
    id: 5,
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
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/Task-Gestion-API'
  },
  {
    id: 6,
    title: 'IoT Dashboard',
    description: 'A real-time dashboard for monitoring IoT devices with data visualization and alert systems.',
    keyFeatures: [
      'Real-time device monitoring',
      'Interactive data visualizations',
      'Custom alert configurations',
      'Device management interface',
      'Historical data analysis',
      'Export functionality',
      'Mobile-responsive design'
    ],
    technologies: ['React', 'D3.js', 'WebSocket', 'Node.js', 'InfluxDB', 'MQTT', 'Docker'],
    role: 'Full Stack Developer',
    year: 2023,
    type: 'IoT Integrations',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/iot-dashboard'
  },
  {
    id: 7,
    title: 'Chat Application',
    description: 'A real-time chat application with multiple rooms, file sharing, and modern UI design.',
    keyFeatures: [
      'Real-time messaging',
      'Multiple chat rooms',
      'File and image sharing',
      'User presence indicators',
      'Message history',
      'Emoji reactions',
      'Dark/light theme toggle'
    ],
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    role: 'Full Stack Developer',
    year: 2023,
    type: 'Real-time Systems',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/chat-app',
    projectUrl: 'https://chat-app-demo.vercel.app'
  },
  {
    id: 8,
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
    githubUrl: 'https://github.com/jerkey06/portfolio'
  },
  {
    id: 9,
    title: 'Microservices Architecture',
    description: 'A scalable microservices architecture with API Gateway, service discovery, and containerization.',
    keyFeatures: [
      'API Gateway implementation',
      'Service discovery with Consul',
      'Load balancing',
      'Circuit breaker pattern',
      'Distributed logging',
      'Health monitoring',
      'Auto-scaling capabilities'
    ],
    technologies: ['Docker', 'Kubernetes', 'Node.js', 'Redis', 'Consul', 'Nginx', 'Prometheus'],
    role: 'DevOps Engineer',
    year: 2023,
    type: 'Microservices',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/jerkey06/microservices-demo'
  }
];
