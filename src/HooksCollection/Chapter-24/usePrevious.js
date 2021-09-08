import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const refContainer = useRef(value);

  useEffect(() => {
    refContainer.current = value;
  }, [value]);

  return refContainer.current;
}
