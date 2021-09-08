import { useCallback, useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useElementSize } from '../Chapter-26/useElementSize';
import { useTimeout } from './useTimeout';
import Square from './Square';

const SQUARE_SIZE = 30;
const FIVE_SECONDS = 5000;
const SQUARES_COUNT = 25;

const spawnAreaStyle = {
  marginTop: 20,
  border: '2px dashed gray',
  width: '100%',
  height: 300,
  position: 'relative',
};

export default function Chapter28() {
  const [squares, setSquares] = useState([]);

  const spawnAreaRef = useRef();
  const areaSize = useElementSize(spawnAreaRef);

  useEffect(() => {
    if (areaSize.width > 0 && areaSize.height > 0) {
      setSquares(generateSquares(SQUARES_COUNT, areaSize));
    }
  }, [areaSize]);

  const onTimeout = useCallback(() => {
    const score = squares.filter((s) => s.wasHit).length;
    alert(`Time's up! Your score is ${score}`);
  }, [squares]);

  const timeoutHook = useTimeout(onTimeout, FIVE_SECONDS);
  const { isRunning: isTimeoutRunning, restart: restartTimeout } = timeoutHook;

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

  const playAgain = () => {
    setSquares(generateSquares(SQUARES_COUNT, areaSize));
    restartTimeout();
  };

  return (
    <>
      <h2>Chapter 28: useTimeout</h2>

      {isTimeoutRunning ? (
        <p>
          You have {(FIVE_SECONDS / 1000).toFixed(1)} seconds to catch them all!
        </p>
      ) : (
        <button onClick={playAgain}>Play again</button>
      )}

      <div ref={spawnAreaRef} style={spawnAreaStyle}>
        {isTimeoutRunning &&
          squares.map((s) => <Square key={s.id} {...s} onHit={handleHit} />)}
      </div>
    </>
  );
}

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
