import { useState, useRef } from 'react';
import PinInput from './PinInput';

const initialDigits = ['', '', '', ''];

export function Chapter9() {
  const [digits, setDigits] = useState(initialDigits);
  const ref = useRef();

  const focus = () => {
    ref.current?.focus();
  };

  const clear = () => {
    setDigits(initialDigits);
  };

  return (
    <div>
      <PinInput ref={ref} digits={digits} onChange={setDigits} />
      <p>
        <button onClick={focus}>FOCUS</button>
        <button onClick={clear}>CLEAR</button>
      </p>
    </div>
  );
}
