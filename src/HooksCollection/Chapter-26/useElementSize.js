import { useCallback, useEffect, useState } from 'react';
import { useEventListener } from '../Chapter-18/useEventListener';

const DEFAULT_SIZE = {
  width: 0,
  height: 0,
};

export function useElementSize(elementRef) {
  const [size, setSize] = useState(DEFAULT_SIZE);

  const updateElementSize = useCallback(() => {
    const node = elementRef.current;
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [elementRef]);

  useEffect(() => {
    updateElementSize();
  }, [updateElementSize]);

  useEventListener('resize', updateElementSize);

  return size;
}
