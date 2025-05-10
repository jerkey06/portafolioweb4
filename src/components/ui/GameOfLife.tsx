import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const GameOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useContext(ThemeContext);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Cell size and grid
    const cellSize = 20;
    const cols = Math.ceil(canvas.width / cellSize);
    const rows = Math.ceil(canvas.height / cellSize);
    
    // Create initial grid
    let grid = Array(cols).fill(null).map(() => 
      Array(rows).fill(null).map(() => Math.random() > 0.85)
    );

    // Get number of live neighbors
    const countNeighbors = (grid: boolean[][], x: number, y: number) => {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const col = (x + i + cols) % cols;
          const row = (y + j + rows) % rows;
          sum += grid[col][row] ? 1 : 0;
        }
      }
      sum -= grid[x][y] ? 1 : 0;
      return sum;
    };

    // Update grid based on Conway's rules
    const updateGrid = () => {
      const next = grid.map((arr) => [...arr]);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const neighbors = countNeighbors(grid, i, j);
          
          if (!grid[i][j] && neighbors === 3) {
            next[i][j] = true;
          } else if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = false;
          }
        }
      }
      
      grid = next;
    };

    // Draw the grid
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j]) {
            ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
          }
        }
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      draw();
      updateGrid();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};