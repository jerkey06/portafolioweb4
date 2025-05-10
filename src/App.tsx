import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { About } from './components/sections/About';
import { AnimatedBackground } from './components/ui/AnimatedBackground';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionName: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      'projects': projectsRef,
      'about': aboutRef,
      'contact': contactRef,
      'blog': blogRef
    };
    
    const ref = sectionMap[sectionName];
    if (ref) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-zinc-900/95 bg-zinc-50/95 dark:text-white text-zinc-900">
        <AnimatedBackground />
        <Header onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />
        <div ref={projectsRef}>
          <Projects id="projects" />
        </div>
        <div ref={aboutRef}>
          <About id="about" contactRef={contactRef} />
        </div>
      </div>
    </ThemeProvider>
  );
}