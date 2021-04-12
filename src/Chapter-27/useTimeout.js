import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(callback, timeout) {
  const timeoutHandleRef = useRef();

  useEffect(() => {
    const timeoutHandle = setTimeout(callback, timeout);
    timeoutHandleRef.current = timeoutHandle;
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [callback, timeout]);

  return useCallback(() => {
    if (timeoutHandleRef.current) {
      clearInterval(timeoutHandleRef.current);
    }
  }, []);
}

// TODO: add support for timeout cancellation here as well
export function useTimeoutNoRestart(callback, timeout) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, timeout);

    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [timeout]);
}
