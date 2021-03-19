import { useCallback, useEffect, useState, useRef, memo } from 'react';
import { useEventListener } from '../Chapter-18';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [delay, value]);

  return debouncedValue;
}

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setThrottledValue(valueRef.current);
    }, delay);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [delay]);

  return throttledValue;
}

const Point = memo(({ left, top, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: left - 5,
        top: top - 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color,
      }}
    />
  );
});

export default function Chapter20() {
  const [lastPos, setLastPos] = useState({ clientX: 0, clientY: 0 });
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
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#88F" />
      ))}
      {debouncedPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#8F8" />
      ))}
    </>
  );
}
