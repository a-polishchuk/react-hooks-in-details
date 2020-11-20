import { useState } from 'react';
import { useRerender } from './useRerender';

/**
 * This is a "heavy" and "expensive" function,
 * which generates our data.
 * We want to run it only once.
 */
function generateData() {
  console.log('GENERATE DATA');
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push(Math.pow(i, 4));
  }
  return data;
}

export function Example() {
  // NOTE: that we're passing the function as initial value
  const [data, setData] = useState(() => generateData());
  const rerender = useRerender();

  const removeFirst = () => {
    setData((prevValue) => {
      const [, ...rest] = prevValue;
      return rest;
    });
  };

  console.log('render');

  return (
    <>
      <button onClick={rerender}>RERENDER</button>
      <button onClick={removeFirst}>REMOVE FIRST</button>
      <ol>
        {data.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ol>
    </>
  );
}
