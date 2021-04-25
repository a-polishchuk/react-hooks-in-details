import { useCallback, useEffect, useState, useRef } from 'react';

export function useInterval(callback, delay) {
  const callbackRef = useRef(callback);
  const [intervalHandle, setIntervalHandle] = useState(null);
  const [trigger, setTrigger] = useState();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    setIntervalHandle(interval);

    return () => {
      clearInterval(interval);
    };
  }, [delay, trigger]);

  const isRunning = !!intervalHandle;

  const stop = useCallback(() => {
    if (intervalHandle) {
      clearInterval(intervalHandle);
      setIntervalHandle(null);
    }
  }, [intervalHandle]);

  const restart = useCallback(() => {
    setTrigger({});
  }, []);

  return { isRunning, stop, restart };
}
