export interface Project {
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
    githubUrl?: string;
    projectUrl?: string;
}
  
export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    summary: string;
    details: string[];
}
  
export interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
    link: string;
    type: 'github' | 'linkedin' | 'blog';
}