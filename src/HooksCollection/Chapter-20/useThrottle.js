import { useEffect, useState, useRef } from 'react';

export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setThrottledValue(valueRef.current);
    }, delay);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [delay]);

  return throttledValue;
}
