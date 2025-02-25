import React from 'react';
import { Github, Linkedin, Newspaper } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-4 border-current shadow-neobrutalist p-6 bg-white dark:bg-zinc-800 hover:transform hover:-translate-y-1 transition-transform block"
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
  );
};