import { useState } from 'react';

function useCounter(initialValue = 0, delta = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + delta);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - delta);
  };

  return [count, increment, decrement];
}

function Counter({ label, initialValue }) {
  const [count, inc, dec] = useCounter(initialValue, 1);

  return (
    <div>
      <p>{label}:</p>
      <div>
        <button onClick={dec}>Minus</button>
        <span style={{ margin: 5 }}>{count}</span>
        <button onClick={inc}>Plus</button>
      </div>
    </div>
  );
}

export function Example() {
  return (
    <div>
      <Counter label="Cats" initialValue={0} />
      <Counter label="Dogs" initialValue={0} />
    </div>
  );
}
