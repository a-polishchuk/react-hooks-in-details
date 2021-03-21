import { useCallback, useEffect, useState } from 'react';
import { useEventListener } from '../Chapter-18';

const INITIAL_SIZE = [0, 0];

function useWindowSize() {
  const [size, setSize] = useState(INITIAL_SIZE);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setSize([innerWidth, innerHeight]);
  }, []);

  useEventListener(
    'resize',
    useCallback((event) => {
      const { innerWidth, innerHeight } = event.target;
      setSize([innerWidth, innerHeight]);
    }, [])
  );

  return size;
}

export default function Chapter22() {
  const [width, height] = useWindowSize();

  return (
    <>
      <h2>Chapter 22: useWindowSize</h2>
      <h3>Width: {width} px</h3>
      <h3>Height: {height} px</h3>
    </>
  );
}
