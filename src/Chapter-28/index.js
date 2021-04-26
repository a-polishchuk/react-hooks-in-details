import { useCallback, useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useElementSize } from '../Chapter-26/useElementSize';
import { useTimeout } from './useTimeout';
import SpawnArea from './SpawnArea';
import GameOver from './GameOver';

const SQUARE_SIZE = 30;
const FIVE_SECONDS = 5000;
const SQUARES_COUNT = 25;

function generateSquares(count, areaSize) {
  const squares = [];
  for (let i = 0; i < count; i++) {
    squares.push({
      id: uuid(),
      left: Math.random() * (areaSize.width - SQUARE_SIZE),
      top: Math.random() * (areaSize.height - SQUARE_SIZE),
      size: SQUARE_SIZE,
      wasHit: false,
    });
  }
  return squares;
}

export default function Chapter28() {
  const [squares, setSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const areaRef = useRef();
  const areaSize = useElementSize(areaRef);
  const score = squares.filter((s) => s.wasHit).length;

  useEffect(() => {
    if (areaSize.width > 0 && areaSize.height > 0) {
      setSquares(generateSquares(SQUARES_COUNT, areaSize));
    }
  }, [areaSize]);

  const onTimeout = useCallback(() => {
    setGameOver(true);
  }, []);

  const { cancel: cancelTimeout, restart: restartTimeout } = useTimeout(
    onTimeout,
    FIVE_SECONDS
  );

  const restartGame = () => {
    setSquares(generateSquares(SQUARES_COUNT, areaSize));
    setGameOver(false);
    restartTimeout();
  };

  const stopGame = () => {
    cancelTimeout();
    setGameOver(true);
  };

  const handleHit = useCallback((squareId) => {
    setSquares((array) =>
      array.map((s) => {
        if (s.id !== squareId) {
          return s;
        }
        return {
          ...s,
          wasHit: true,
        };
      })
    );
  }, []);

  return (
    <>
      <h2>Chapter 28: useTimeout</h2>
      {gameOver ? (
        <GameOver score={score} restartGame={restartGame} />
      ) : (
        <>
          <button onClick={stopGame}>Stop</button>
          <SpawnArea ref={areaRef} squares={squares} onHit={handleHit} />
        </>
      )}
    </>
  );
}
