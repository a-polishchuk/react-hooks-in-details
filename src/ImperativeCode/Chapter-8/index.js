import { useEffect, useCallback, useRef } from 'react';
import { useCounter } from 'HooksBasics/Chapter-3';

function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export default function Chapter8() {
  const [value, increment] = useCounter();

  useEffect(() => {
    console.log('mounted');
  }, []);

  console.log(`render, value: ${value}`);

  const callback = useCallback(() => {
    console.log(`  value updated: ${value}`);
  }, [value]);

  useUpdateEffect(callback);

  return <button onClick={increment}>RERENDER</button>;
}
