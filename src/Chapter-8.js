import { useEffect, useCallback, useRef, useState } from 'react';
import { useCounter } from './useState/useCounter';

export function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export function Example() {
  const [value, increment] = useCounter();

  useEffect(() => {
    console.log('mounted');
  }, []);

  const callback = useCallback(() => {
    console.log(`  value updated: ${value}`);
  }, [value]);

  useUpdateEffect(callback);

  console.log(`render, value: ${value}`);

  return <button onClick={increment}>RERENDER</button>;
}
