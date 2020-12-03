/* eslint-disable default-case */
import { useEffect, useLayoutEffect, useState, useMemo } from 'react';

function useCharacterPosition(step) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setLeft((prevValue) => prevValue - step);
          break;
        case 'ArrowRight':
          setLeft((prevValue) => prevValue + step);
          break;
        case 'ArrowUp':
          setTop((prevValue) => prevValue - step);
          break;
        case 'ArrowDown':
          setTop((prevValue) => prevValue + step);
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [step]);

  return [left, top];
}

const initialStyle = {
  backgroundColor: '#F00',
  position: 'absolute',
  width: 100,
  height: 100,
  left: 0,
  top: 0,
};

function generateDummies(count) {
  const dummies = [];
  for (let i = 0; i < count; i++) {
    dummies.push(<div key={i}>i == {i}</div>);
  }
  return dummies;
}

export function Example() {
  const [left, top] = useCharacterPosition(50);
  // const [style, setStyle] = useState(initialStyle);

  // useLayoutEffect(() => {
  //   setStyle((prevStyle) => ({
  //     ...prevStyle,
  //     left,
  //     top,
  //   }));
  // }, [left, top]);

  const style = useMemo(
    () => ({
      ...initialStyle,
      left,
      top,
    }),
    [left, top]
  );

  return (
    <>
      <h2>
        [{left}, {top}]
      </h2>
      <div style={style} />
      {/* {generateDummies(10000)} */}
    </>
  );
}
