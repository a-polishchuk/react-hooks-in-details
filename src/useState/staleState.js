import { useState } from 'react';

export function Example({ delay }) {
  const [delayedCount, setDelayedCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const laggyIncrement = () => {
    setTimeout(() => {
      setDelayedCount(delayedCount + 1);
    }, delay);
  };

  const correctIncrement = () => {
    setTimeout(() => {
      setCorrectCount((prevValue) => prevValue + 1);
    }, delay);
  };

  return (
    <div>
      <p>Delayed count: {delayedCount}</p>
      <button onClick={laggyIncrement}>Laggy Increment</button>
      <p>Correct count: {correctCount}</p>
      <button onClick={correctIncrement}>Correct Increment</button>
    </div>
  );
}
