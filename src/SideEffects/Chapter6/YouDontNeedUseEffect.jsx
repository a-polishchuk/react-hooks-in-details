import { useEffect, useState } from 'react';
import Toolbar from 'components/Toolbar';
import Button from 'components/Button';

function useBallPosition(step) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
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
  }, [step]);

  return [left, top];
}

function buildStyle(left, top) {
  return {
    position: 'absolute',
    fontSize: 64,
    transition: 'all 0.5s ease-in-out',
    transform: `rotate(${Math.random() * 360}deg)`,
    left,
    top,
  };
}

export function YouDontNeedUseEffect() {
  const [, setDummyState] = useState();
  const [left, top] = useBallPosition(50);
  const style = buildStyle(left, top);
  const rerender = () => setDummyState({});

  return (
    <>
      <h2>Chapter 6.3. You don't need useEffect</h2>

      <Toolbar>
        <Button text="Click me to re-render the component" onClick={rerender} />
      </Toolbar>

      <div>Use arrow keys to move the ball.</div>
      <div style={{ position: 'relative' }}>
        <div style={style}>⚽️</div>
      </div>
    </>
  );
}
