import { useCallback, useEffect, useState, useRef } from 'react';

export function useTimeout(callback, timeout) {
  const timeoutHandleRef = useRef();
  const [restartTrigger, setRestartTrigger] = useState();

  useEffect(() => {
    const timeoutHandle = setTimeout(callback, timeout);
    timeoutHandleRef.current = timeoutHandle;
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [callback, timeout, restartTrigger]);

  const cancel = useCallback(() => {
    if (timeoutHandleRef.current) {
      clearInterval(timeoutHandleRef.current);
    }
  }, []);

  const restart = useCallback(() => {
    setRestartTrigger({});
  }, []);

  return { cancel, restart };
}
