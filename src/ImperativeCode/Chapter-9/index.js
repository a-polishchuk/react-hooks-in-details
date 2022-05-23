import { useState, useRef } from 'react';
import PinInput from './PinInput';

const initialDigits = ['', '', '', ''];

export default function Chapter9() {
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
      <PinInput ref={ref} digits={digits} onChange={setDigits} />
      <div style={{ display: 'flex', gap: 10, margin: 10 }}>
        <button onClick={focus}>FOCUS</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    </>
  );
}
