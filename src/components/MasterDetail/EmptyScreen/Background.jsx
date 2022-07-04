import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { useEffect, useState } from 'react';
import { getRandomNumber } from 'utils/getRandomNumber';

import { MovingLogo } from './MovingLogo';

const CYCLE_DURATION = 20;

function generateInitialPositions(positionsNumber) {
  return new Array(positionsNumber).fill({
    left: '50%',
    top: '50%',
  });
}

function generateRandomPositions(positionsNumber) {
  const array = [];
  for (let i = 0; i < positionsNumber; i++) {
    array.push({
      left: `${getRandomNumber(0, 100)}%`,
      top: `${getRandomNumber(0, 100)}%`,
    });
  }
  return array;
}

export function Background({ logosNumber }) {
  const [positions, setPositions] = useState(() =>
    generateInitialPositions(logosNumber)
  );

  useEffect(() => {
    setPositions(generateRandomPositions(logosNumber));
  }, [logosNumber]);

  useInterval(() => {
    setPositions(generateRandomPositions(logosNumber));
  }, CYCLE_DURATION * 1000);

  return (
    <>
      {positions.map(({ left, top }, index) => (
        <MovingLogo
          key={index}
          duration={CYCLE_DURATION}
          left={left}
          top={top}
        />
      ))}
    </>
  );
}
