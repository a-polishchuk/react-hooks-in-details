import { useEffect, useLayoutEffect, useState, useMemo } from 'react';

function useCharacterPosition(step) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'ArrowLeft':
          setLeft((prev) => prev - step);
          break;
        case 'ArrowRight':
          setLeft((prev) => prev + step);
          break;
        case 'ArrowUp':
          setTop((prev) => prev - step);
          break;
        case 'ArrowDown':
          setTop((prev) => prev + step);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
    dummies.push(<span key={i}>i == {i}</span>);
  }
  return dummies;
}

export default function Chapter7() {
  const [left, top] = useCharacterPosition(50);
  // const [style, setStyle] = useState(initialStyle);

  const style = useMemo(() => {
    return {
      ...initialStyle,
      left,
      top,
    };
  }, [left, top]);

  // useLayoutEffect(() => {
  //   setStyle((prev) => {
  //     return {
  //       ...prev,
  //       left,
  //       top,
  //     };
  //   });
  // }, [left, top]);

  return (
    <>
      <h2>Chapter 7. useLayoutEffect</h2>

      <h3>
        [{left}, {top}]
      </h3>

      <div style={{ position: 'relative' }}>
        <div style={style} />
        {/* {generateDummies(10000)} */}
      </div>
    </>
  );
}
