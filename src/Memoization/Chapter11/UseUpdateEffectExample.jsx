import { useCallback, useEffect, useRef } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ValueLabel } from 'components/ValueLabel';
import { useCounter } from 'HooksBasics/Chapter3/useCounter';

function useUpdateEffect(callback) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export function UseUpdateEffectExample() {
  const { value, increase } = useCounter();

  useEffect(() => {
    console.log('useEffect after first render');
  }, []);

  useUpdateEffect(
    useCallback(() => {
      console.log(`useUpdateEffect, value: ${value}`);
    }, [value])
  );

  console.log('render');

  return (
    <>
      <h2>Chapter 11. useCallback</h2>
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
