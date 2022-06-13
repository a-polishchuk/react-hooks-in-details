import { useState } from 'react';

export function useCounter(initialValue = 0, delta = 1) {
  const [value, setValue] = useState(initialValue);

  const increase = () => setValue((prevValue) => prevValue + delta);
  const decrease = () => setValue((prevValue) => prevValue - delta);

  return {
    value,
    increase,
    decrease,
  };
}
