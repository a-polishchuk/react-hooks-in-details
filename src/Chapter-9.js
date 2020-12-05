import { useState, useRef } from 'react';
import PinInput from './useRef/PinInput';

const styles = {
  button: {
    margin: 5,
  },
};

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
        <button style={styles.button} onClick={focus}>
          FOCUS
        </button>
        <button style={styles.button} onClick={clear}>
          CLEAR
        </button>
        <button style={styles.button} onClick={submit}>
          SUBMIT
        </button>
      </p>
    </div>
  );
}
