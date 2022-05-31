import { useLayoutEffect, useState, useRef } from 'react';

import { buildDotStyle } from './buildDotStyle';
import { generateDummies } from './generateDummies';

const INITIAL_POSITION = { x: 0, y: 0 };

export function UseLayoutEffectExample() {
  const divRef = useRef();
  const [eventPos, setEventPos] = useState(INITIAL_POSITION);
  const [divPos, setDivPos] = useState(INITIAL_POSITION);
  const [clickPos, setClickPos] = useState(INITIAL_POSITION);
  const [effectPos, setEffectPos] = useState(INITIAL_POSITION);

  const handleClick = (event) => {
    setEventPos({ x: event.pageX, y: event.pageY });
    const { left, top } = event.target.getBoundingClientRect();
    setClickPos({
      x: event.pageX - left,
      y: event.pageY - top,
    });
  };

  useLayoutEffect(() => {
    if (divRef.current) {
      const { left, top } = divRef.current.getBoundingClientRect();
      setDivPos({ x: left, y: top });
    }
  }, [eventPos]);

  useLayoutEffect(() => {
    setEffectPos({
      x: eventPos.x - divPos.x,
      y: eventPos.y - divPos.y,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divPos]);

  return (
    <div
      ref={divRef}
      style={{ height: '100%', width: '100%', position: 'relative' }}
      onClick={handleClick}
    >
      <h2>Chapter 7. useEffect vs useLayoutEffect</h2>
      <h3>Batching effects with useLayoutEffect</h3>
      {generateDummies(5000)}
      <div style={buildDotStyle(clickPos, '#5599ff88', 10)} />
      <div style={buildDotStyle(effectPos, '#ff559988', 20)} />
    </div>
  );
}
