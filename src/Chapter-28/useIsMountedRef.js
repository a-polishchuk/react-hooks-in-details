import { useEffect, useRef } from 'react';

export function useIsMountedRef() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    const beforeUnmount = () => {
      isMountedRef.current = false;
    };
    return beforeUnmount;
  }, []);

  return isMountedRef;
}
