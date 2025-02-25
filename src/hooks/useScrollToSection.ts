import { useRef } from 'react';

export function useScrollToSection() {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return { scrollToSection };
}