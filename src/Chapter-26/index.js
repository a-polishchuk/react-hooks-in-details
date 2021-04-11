import { memo, useCallback, useState } from 'react';
import { useWindowSize } from '../Chapter-22/useWindowSize';
import { useInterval } from './useInterval';
import './style.css';

const PALETTE = ['#23d696', '#fd743a', '#c293df', '#d6ef3d', '#ba1d44'];

export default function Chapter26() {
  const [screenWidth, screenHeight] = useWindowSize();
  const [particles, setParticles] = useState([]);

  const addParticle = useCallback(() => {
    setParticles((array) => {
      const newItem = {
        left: Math.random() * screenWidth,
        top: Math.random() * screenHeight,
        size: 10 + Math.random() * 30,
        speed: Math.random() * 10,
        color: getRandomElement(PALETTE),
      };
      return [...array, newItem];
    });
  }, [screenHeight, screenWidth]);

  useInterval(addParticle, 500);

  return (
    <>
      <h2>Chapter 26: useInterval</h2>
      {particles.map((p, index) => (
        <Particle key={index} {...p} />
      ))}
    </>
  );
}

const Particle = memo(({ left, top, speed, color, size }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: size,
      height: size,
      backgroundColor: color,
      animation: `spin ${speed}s linear infinite`,
    }}
  />
));

function getRandomElement(array) {
  const index = Math.round(Math.random() * array.length);
  return array[index];
}
