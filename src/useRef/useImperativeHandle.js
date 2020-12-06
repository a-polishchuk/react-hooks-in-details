import { useState, useRef } from 'react';
import PinInput from './PinInput';

const EMPTY_ARRAY = ['', '', '', '', '', ''];

export function Example() {
  const [digits, setDigits] = useState(EMPTY_ARRAY);
  const pinInputRef = useRef();

  const focus = () => pinInputRef.current.focus();

  const clear = () => setDigits(EMPTY_ARRAY);

  const submit = () => console.log(digits);

  return (
    <div>
      <PinInput ref={pinInputRef} digits={digits} onChange={setDigits} />
      <p>
        <button onClick={focus}>FOCUS</button>
        <button onClick={clear}>CLEAR</button>
        <button onClick={submit}>SUBMIT</button>
      </p>
    </div>
  );
}
