import { memo, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useTimeout } from './useTimeout';

const AREA_SIZE = 600;
const SQUARE_SIZE = 30;
const FIVE_SECONDS = 5000;
const SQUARES_COUNT = 25;

const styles = {
  area: {
    border: '1px solid #000',
    width: AREA_SIZE,
    height: AREA_SIZE,
    position: 'relative',
  },
};

function generateSquares(count) {
  const squares = [];
  for (let i = 0; i < count; i++) {
    squares.push({
      id: uuid(),
      left: Math.random() * (AREA_SIZE - SQUARE_SIZE),
      top: Math.random() * (AREA_SIZE - SQUARE_SIZE),
      wasHit: false,
    });
  }
  return squares;
}

export default function Chapter27() {
  const [squares, setSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const score = squares.filter((s) => s.wasHit).length;

  useEffect(() => {
    setSquares(generateSquares(SQUARES_COUNT));
  }, []);

  const onTimeout = useCallback(() => {
    setGameOver(true);
  }, []);

  const { cancel: cancelTimeout, restart: restartTimeout } = useTimeout(
    onTimeout,
    FIVE_SECONDS
  );

  const restartGame = () => {
    setSquares(generateSquares(SQUARES_COUNT));
    setGameOver(false);
    restartTimeout();
  };

  const stopGame = () => {
    cancelTimeout();
    setGameOver(true);
  };

  const onHit = useCallback((squareId) => {
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
      <h2>Chapter 27: useTimeout</h2>
      {gameOver ? (
        <>
          <p>Game over! Your score: {score}</p>
          <button onClick={restartGame}>Restart</button>
        </>
      ) : (
        <>
          <button onClick={stopGame}>Stop</button>
          <div style={styles.area}>
            {squares.map((s) => (
              <Square
                key={s.id}
                id={s.id}
                left={s.left}
                top={s.top}
                wasHit={s.wasHit}
                onHit={onHit}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

const Square = memo(({ id, left, top, wasHit, onHit }) => (
  <div
    onMouseEnter={() => onHit(id)}
    style={{
      position: 'absolute',
      left,
      top,
      width: SQUARE_SIZE,
      height: SQUARE_SIZE,
      backgroundColor: wasHit ? '#8008' : '#800',
    }}
  />
));
