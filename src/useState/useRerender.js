import { useState } from 'react';

/**
 * This hook returns a function which can trigger component re-render.
 * You can use is to force component re-render as a reaction to
 * some external event.
 */
export function useRerender() {
  const [, setTrigger] = useState();

  return () => {
    setTrigger({});
  };
}
