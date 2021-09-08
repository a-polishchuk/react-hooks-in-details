import { useRef } from 'react';
import { useHovered } from './useHovered';

const style = {
  fontSize: 128,
};

function Kolobok() {
  const spanRef = useRef();
  const isHovered = useHovered(spanRef);

  return (
    <span ref={spanRef} style={style}>
      {isHovered ? '\u{1F604}' : '\u{1F642}'}
    </span>
  );
}

export default function Chapter30() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(<Kolobok key={i} />);
  }

  return (
    <>
      <h2>Chapter 30: useHovered</h2>
      {array}
    </>
  );
}
