import { useEffect, useState } from 'react';

function getRandomValue(min, max) {
  return min + (max - min) * Math.random();
}

export function useBallPosition(minStep, maxStep) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = getRandomValue(minStep, maxStep);
      switch (event.key) {
        case 'ArrowLeft':
          setLeft((prev) => Math.max(prev - step, 0));
          break;
        case 'ArrowRight':
          setLeft((prev) => prev + step);
          break;
        case 'ArrowUp':
          setTop((prev) => Math.max(prev - step, 0));
          break;
        case 'ArrowDown':
          setTop((prev) => prev + step);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [minStep, maxStep]);

  return [left, top];
}
