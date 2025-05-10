import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { About } from './components/sections/About';
import { GameOfLife } from './components/ui/GameOfLife';

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
      <div className="min-h-screen transition-colors duration-300 dark:bg-zinc-900/90 bg-zinc-50/90 dark:text-white text-zinc-900 relative z-10">
        <GameOfLife />
        <Header onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />
        <div ref={projectsRef} className="relative z-10">
          <Projects id="projects" />
        </div>
        {/*<div ref={blogRef}>
          <Blog id="blog" />
        </div>*/}
        <div ref={aboutRef} className="relative z-10">
          <About id="about" contactRef={contactRef} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;