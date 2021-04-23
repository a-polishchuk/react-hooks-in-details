import { memo, useCallback, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useElementSize } from '../Chapter-26/useElementSize';
import { useInterval } from './useInterval';
import './style.css';

const PALETTE = ['#23d696', '#fd743a', '#c293df', '#d6ef3d', '#ba1d44'];
const MIN_SIZE = 10;
const MAX_SIZE = 40;

export default function Chapter27() {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef();
  const { width, height } = useElementSize(containerRef);
  const maxLeft = width - MAX_SIZE;
  const maxTop = height - MAX_SIZE;
  console.log(width + ' x ' + height);

  const spawnParticle = useCallback(() => {
    setParticles((array) => {
      const newItem = {
        id: uuid(),
        left: Math.random() * maxLeft,
        top: Math.random() * maxTop,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        speed: Math.random() * 10,
        color: getRandomElement(PALETTE),
      };
      return [...array, newItem];
    });
  }, [maxLeft, maxTop]);

  const clearInterval = useInterval(spawnParticle, 500);

  const stopSpawning = () => {
    clearInterval();
  };

  return (
    <>
      <h2>Chapter 27: useInterval</h2>
      <button onClick={stopSpawning}>Stop spawning</button>
      <div className="spawnArea" ref={containerRef}>
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>
    </>
  );
}

const Particle = memo(({ left, top, speed, color, size }) => {
  const style = {
    position: 'absolute',
    left,
    top,
    width: size,
    height: size,
    backgroundColor: color,
    animation: `spin ${speed}s linear infinite`,
  };
  return <div style={style} />;
});

function getRandomElement(array) {
  const index = Math.round(Math.random() * array.length);
  return array[index];
}
