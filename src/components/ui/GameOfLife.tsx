import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CELL_SIZE = 20;
const GRID_COLOR_LIGHT = 'rgba(0, 0, 0, 0.1)';
const CELL_COLOR_LIGHT = 'rgba(0, 0, 0, 0.2)';
const GRID_COLOR_DARK = 'rgba(255, 255, 255, 0.1)';
const CELL_COLOR_DARK = 'rgba(255, 255, 255, 0.2)';

export const GameOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useContext(ThemeContext);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridColor = isDark ? GRID_COLOR_DARK : GRID_COLOR_LIGHT;
    const cellColor = isDark ? CELL_COLOR_DARK : CELL_COLOR_LIGHT;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let cols = Math.floor(width / CELL_SIZE);
    let rows = Math.floor(height / CELL_SIZE);
    
    canvas.width = width;
    canvas.height = height;

    // Initialize grid
    let grid = Array(cols).fill(null).map(() => 
      Array(rows).fill(null).map(() => Math.random() > 0.85)
    );

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      // Draw cells
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j]) {
            ctx.fillStyle = cellColor;
            ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
          }
        }
      }
      // Draw grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, height);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * CELL_SIZE);
        ctx.lineTo(width, j * CELL_SIZE);
        ctx.stroke();
      }
    };

    // Dibuja el estado inicial del grid al cargar la página
    drawGrid();

    const countNeighbors = (grid: boolean[][], x: number, y: number) => {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let col = (x + i + cols) % cols;
          let row = (y + j + rows) % rows;
          sum += grid[col][row] ? 1 : 0;
        }
      }
      sum -= grid[x][y] ? 1 : 0;
      return sum;
    };

    // Elimina integración con mouse y aparición local
    // Añade aparición aleatoria de fragmentos en todo el fondo
    const randomizeFragments = () => {
      // Cada ciclo, con baja probabilidad, activa fragmentos aleatorios
      for (let n = 0; n < 5; n++) { // 5 fragmentos por ciclo
        const centerX = Math.floor(Math.random() * cols);
        const centerY = Math.floor(Math.random() * rows);
        // Pequeño patrón tipo "glider"
        const pattern = [
          [0,0], [1,0], [2,0], [2,1], [1,2]
        ];
        pattern.forEach(([dx, dy]) => {
          const x = (centerX + dx) % cols;
          const y = (centerY + dy) % rows;
          grid[x][y] = true;
        });
      }
    };

    const updateGrid = () => {
      randomizeFragments();
      let next = grid.map(arr => [...arr]);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let neighbors = countNeighbors(grid, i, j);
          if (!grid[i][j] && neighbors === 3) {
            next[i][j] = true;
          } else if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = false;
          }
        }
      }
      grid = next;
      drawGrid();
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      cols = Math.floor(width / CELL_SIZE);
      rows = Math.floor(height / CELL_SIZE);
      canvas.width = width;
      canvas.height = height;
      grid = Array(cols).fill(null).map(() => 
        Array(rows).fill(null).map(() => Math.random() > 0.85)
      );
      drawGrid();
    };

    window.addEventListener('resize', handleResize);
    const intervalId = setInterval(updateGrid, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-30"
    />
  );
};