import { useEffect, useState, useRef } from 'react';

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

export function UpdateEffectExample() {
  const [, setTrigger] = useState();

  useEffect(() => {
    console.log('component is mounted');
  }, []);

  useUpdateEffect(() => {
    console.log('component is updated');
  }, []);

  // NOTE: you can use this pattern to manually force component re-render
  const forceRerender = () => {
    setTrigger({});
  };

  return (
    <div>
      <button onClick={forceRerender}>Force Rerender</button>
    </div>
  );
}
