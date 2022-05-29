import { useEffect, useCallback, useRef } from 'react';
import { useCounter } from 'HooksBasics/Chapter3/useCounter';
import Button from 'components/Button';

// TODO: store callback in useRef as well
function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export default function Chapter8() {
  const { value, increase } = useCounter();

  useEffect(() => {
    console.log('mounted');
  }, []);

  console.log(`render, value: ${value}`);

  // TODO: we should not use useCallback here, it's too early
  // let's introduce new hooks one by one
  const callback = useCallback(() => {
    console.log(`  value updated: ${value}`);
  }, [value]);

  useUpdateEffect(callback);

  return (
    <>
      <h2>Chapter 8. Storing state in useRef</h2>
      <Button text="Click me to trigger new render" onClick={increase} />
    </>
  );
}
