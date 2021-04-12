import { useCallback, useEffect, useState, memo } from 'react';
import { useEventListener } from '../Chapter-18/useEventListener';
import { useDebounce } from './useDebounce';
import { useThrottle } from './useThrottle';

const SIZE = 10;

const Point = memo(({ left, top, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: left - SIZE / 2,
        top: top - SIZE / 2,
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: color,
      }}
    />
  );
});

const INITIAL_POS = {
  clientX: 0,
  clientY: 0,
};

export default function Chapter20() {
  const [lastPos, setLastPos] = useState(INITIAL_POS);
  const debouncedPos = useDebounce(lastPos, 300);
  const throttledPos = useThrottle(lastPos, 300);

  const [path, setPath] = useState([]);
  const [debouncedPath, setDebouncedPath] = useState([]);
  const [throttledPath, setThrottledPath] = useState([]);

  useEventListener(
    'mousemove',
    useCallback((event) => {
      const { clientX, clientY } = event;
      const pos = { clientX, clientY };
      setLastPos(pos);
      setPath((array) => [...array, pos]);
    }, [])
  );

  useEffect(() => {
    setDebouncedPath((array) => [...array, debouncedPos]);
  }, [debouncedPos]);

  useEffect(() => {
    setThrottledPath((array) => [...array, throttledPos]);
  }, [throttledPos]);

  return (
    <>
      <h2>Chapter 20: useDebounce, useThrottle</h2>
      {path.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#F88" />
      ))}
      {throttledPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#8F8" />
      ))}
      {debouncedPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#88F" />
      ))}
    </>
  );
}
