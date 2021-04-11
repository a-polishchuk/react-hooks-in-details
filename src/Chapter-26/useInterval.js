import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [delay]);
}
