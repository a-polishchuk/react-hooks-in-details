import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimeout(callback, timeout) {
  const callbackRef = useRef();
  const [timeoutHandle, setTimeoutHandle] = useState(null);
  const [restartTrigger, setRestartTrigger] = useState();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setTimeoutHandle(null);
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, timeout);
    setTimeoutHandle(handle);
    return () => {
      clearTimeout(handle);
    };
  }, [timeout, restartTrigger]);

  const isRunning = !!timeoutHandle;

  const cancel = useCallback(() => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
      setTimeoutHandle(null);
    }
  }, [timeoutHandle]);

  const restart = useCallback(() => {
    setRestartTrigger({});
  }, []);

  return { isRunning, cancel, restart };
}
