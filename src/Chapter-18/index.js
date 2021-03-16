import { useState, useRef, useEffect, useCallback } from 'react';

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event) => {
      savedHandler.current(event);
    };
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default function Chapter18() {
  const [coords, setCoords] = useState([]);

  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const newPoint = { x: clientX, y: clientY };
      setLastPos(newPoint);
      setCoords((array) => [...array, newPoint]);
    },
    [setCoords]
  );
  useEventListener('mousemove', onMouseMove);

  const onKeyPressed = useCallback((event) => {
    if (event.key === 'Backspace') {
      setCoords([]);
    }
  }, []);
  useEventListener('keydown', onKeyPressed);

  return (
    <>
      <h2>Chapter 18: useEventListener</h2>
      <h2>{JSON.stringify(lastPos)}</h2>
      {coords.map((point, index) => {
        const style = {
          position: 'absolute',
          left: point.x - 5,
          top: point.y - 5,
          width: 10,
          height: 10,
          backgroundColor: '#F66',
          borderRadius: 5,
        };
        return <div key={index} style={style} />;
      })}
    </>
  );
}
