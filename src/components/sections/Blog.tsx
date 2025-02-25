import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { BlogPostCard } from '../ui/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';
import { ThemeContext } from '../../context/ThemeContext';

export const Blog: React.FC<{ id: string }> = ({ id }) => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <div id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Latest Updates</h2>
        
        {/* GitHub Contributions */}
        <div className="border-4 border-current shadow-neobrutalist p-6 mb-8 bg-white dark:bg-zinc-800">
          <h3 className="text-2xl font-bold mb-4">GitHub Activity</h3>
          <GitHubCalendar 
            username="yourusername"
            colorScheme={isDark ? 'dark' : 'light'}
          />
        </div>

        {/* Blog Posts and Updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};