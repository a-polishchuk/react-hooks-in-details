import { useState, useRef } from 'react';
import PinInput from './PinInput';

const EMPTY_DIGITS = ['', '', '', ''];

export function Example() {
  const [digits, setDigits] = useState(EMPTY_DIGITS);
  const [pinVisible, setPinVisible] = useState(true);
  const ref = useRef();

  const focus = () => {
    ref.current?.focus();
  };

  const clear = () => {
    setDigits(EMPTY_DIGITS);
  };

  const toggleVisibility = () => {
    setPinVisible((prevValue) => !prevValue);
  };

  return (
    <div>
      {pinVisible ? (
        <PinInput ref={ref} digits={digits} onChange={setDigits} />
      ) : null}
      <p>
        <button onClick={focus}>FOCUS</button>
        <button onClick={clear}>CLEAR</button>
        <button onClick={toggleVisibility}>
          {pinVisible ? 'HIDE' : 'SHOW'}
        </button>
      </p>
    </div>
  );
}
