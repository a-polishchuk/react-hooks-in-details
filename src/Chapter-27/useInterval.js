import { useCallback, useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const callbackRef = useRef(callback);
  const intervalHandleRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    intervalHandleRef.current = intervalHandle;

    return () => {
      clearInterval(intervalHandle);
    };
  }, [delay]);

  return useCallback(() => {
    if (intervalHandleRef.current) {
      clearInterval(intervalHandleRef.current);
    }
  }, []);
}
