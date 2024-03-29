import { useEffect, useRef } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ValueLabel } from 'components/ValueLabel';
import { useCounter } from '1-HooksBasics/Chapter3/useCounter';

function useUpdateEffect(callback, deps) {
  const firstRenderRef = useRef(true);
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callbackRef.current?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function StoringStateInUseRef() {
  const { value, increase } = useCounter();

  useEffect(() => {
    console.log('useEffect after first render');
  }, []);

  useUpdateEffect(() => {
    console.log(`useUpdateEffect, value: ${value}`);
  }, [value]);

  console.log('render');

  return (
    <>
      <h2>Chapter 9. Storing state in useRef</h2>
      <h3>useUpdateEffect</h3>
      <Toolbar>
        <div style={{ minWidth: 100, marginLeft: 20 }}>
          <ValueLabel value={value} />
        </div>
        <Button text="+1" onClick={increase} />
      </Toolbar>
    </>
  );
}
