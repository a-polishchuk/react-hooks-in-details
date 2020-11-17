import React, { useState } from 'react';

const initialValue = {
  label: 'Course theme',
  value: 'Mastering React Hooks',
};

export function SyntaxBasics() {
  // NOTE: we're using destructuring syntax here,
  // value and setter names could be anything you want
  const [value, setter] = useState();

  // this code is a longer version of previous example
  const pieceOfState = useState();
  const [anotherValue, setAnotherValue] = pieceOfState;

  // setting initial value, will be used only during the first render
  const [pair, setPair] = useState(initialValue);

  // NOTE: could be both primitive type and object
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div>Value: {value}</div>
      <div>Another value: {anotherValue}</div>
      <div>
        {pair.label}: {pair.value}
      </div>
      {isLoading ? <div>Loading...</div> : null}
    </div>
  );
}

// NOTE: you can use more than one state hook in a single component

// IMPORTANT: it's recommended to split state into multiple state variables
// based on which values tend to change together (in order to reduce re-renders)

export function UpdatingState() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => setIsLoading((prevValue) => !prevValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{isLoading ? 'Loading...' : 'Up to date'}</p>
      <button onClick={toggleLoading}>Toggle loading</button>
    </div>
  );
}
