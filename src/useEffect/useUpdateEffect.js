import { useCallback, useEffect, useState, useRef } from 'react';

/**
 * This effect will not be executed on initial render.
 */
export function useUpdateEffect(onUpdate) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onUpdate();
    }
  }, [onUpdate]);
}

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('  component is mounted');
  }, []);

  const updateCallback = useCallback(() => {
    console.log(`  component is updated (${count})`);
  }, [count]);

  useUpdateEffect(updateCallback);

  const triggerUpdate = () => {
    setCount((prevValue) => prevValue + 1);
  };

  console.log('render');

  return (
    <div>
      <button onClick={triggerUpdate}>{count}</button>
    </div>
  );
}
