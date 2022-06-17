import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { useCallback, useState } from 'react';

export function Score({ value, delay, step }) {
  const animatedValue = useAnimatedValue(value, delay, step);

  return <span>{animatedValue} pts</span>;
}

function useAnimatedValue(value, delay, step) {
  const [animatedValue, setAnimatedValue] = useState(value);

  const callback = useCallback(() => {
    setAnimatedValue((current) => Math.min(current + step, value));
  }, [step, value]);

  useInterval(callback, delay);

  return animatedValue;
}
