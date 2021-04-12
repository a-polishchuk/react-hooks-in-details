import { memo, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useWindowSize } from '../Chapter-22/useWindowSize';
import { useInterval } from './useInterval';
import './style.css';

const PALETTE = ['#23d696', '#fd743a', '#c293df', '#d6ef3d', '#ba1d44'];

export default function Chapter26() {
  const [particles, setParticles] = useState([]);
  const [maxLeft, maxTop] = useWindowSize();

  const spawnParticle = useCallback(() => {
    setParticles((array) => {
      const newItem = {
        id: uuid(),
        left: Math.random() * maxLeft,
        top: Math.random() * maxTop,
        size: 10 + Math.random() * 30,
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
      <h2>Chapter 26: useInterval</h2>
      <button onClick={stopSpawning}>Stop spawning</button>
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
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
