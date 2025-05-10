import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className="absolute w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              isDark ? 'bg-white/5' : 'bg-black/5'
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};