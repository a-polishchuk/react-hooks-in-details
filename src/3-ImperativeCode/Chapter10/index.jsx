import { useState, useRef } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';

import { PinInput } from './PinInput';

const initialDigits = ['', '', '', ''];

export function UseImperativeHandleExample() {
  const [digits, setDigits] = useState(initialDigits);
  const ref = useRef();

  const focus = () => {
    ref.current?.focus();
  };

  const clear = () => {
    setDigits(initialDigits);
  };

  return (
    <>
      <h2>Chapter 9. useImperativeHandle</h2>
      <h3>PinInput component</h3>

      <Toolbar>
        <PinInput ref={ref} digits={digits} onChange={setDigits} />
      </Toolbar>

      <Toolbar>
        <Button text="Focus" onClick={focus} />
        <Button text="Clear" onClick={clear} />
      </Toolbar>
    </>
  );
}
