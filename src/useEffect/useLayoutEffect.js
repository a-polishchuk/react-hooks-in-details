/* eslint-disable default-case */
import { useEffect, useLayoutEffect, useState } from 'react';

// Not all effects can be deferred.
// For example, a DOM mutation that is visible to the user must fire
// synchronously before the next paint so that the user does not
// perceive a visual inconsistency.

function generateDummies(count) {
  const dummies = [];
  for (let i = 0; i < count; i++) {
    dummies.push(<div key={i}>i == {i}</div>);
  }
  return dummies;
}

function useKeyboardMargins(step) {
  const [marginX, setMarginX] = useState(0);
  const [marginY, setMarginY] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setMarginX((prevValue) => prevValue - step);
          break;
        case 'ArrowRight':
          setMarginX((prevValue) => prevValue + step);
          break;
        case 'ArrowUp':
          setMarginY((prevValue) => prevValue - step);
          break;
        case 'ArrowDown':
          setMarginY((prevValue) => prevValue + step);
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [step]);

  return [marginX, marginY];
}

const initialStyle = {
  width: 100,
  height: 100,
  backgroundColor: '#F00',
};

export function Example() {
  const [style, setStyle] = useState(initialStyle);
  const [marginLeft, marginTop] = useKeyboardMargins(50);

  useLayoutEffect(() => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      marginLeft,
      marginTop,
    }));
  }, [marginLeft, marginTop]);

  const dummies = generateDummies(10000);

  return (
    <>
      <h2>
        [{marginLeft}, {marginTop}]
      </h2>
      <div style={style} />
      {dummies}
    </>
  );
}
