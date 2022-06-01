import { useState, useRef } from 'react';
import { capitalize } from 'lodash';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';

export function UncontrolledInput() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleChange = (event) => setText(event.target.value);

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const toUpperCase = () => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.toUpperCase();
    }
  };

  const toCapitalCase = () => {
    if (inputRef.current) {
      inputRef.current.value = capitalize(inputRef.current.value);
    }
  };

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <h2>Chapter 8. Controlled vs uncontrolled</h2>
      <h3>Uncontrolled input</h3>
      <p>
        <span style={{ fontSize: 24 }}>ℹ️</span> State is managed by real DOM
      </p>

      <Toolbar>
        <input
          ref={inputRef}
          type="text"
          defaultValue="default text"
          onChange={handleChange}
        />
      </Toolbar>
      <Toolbar>
        <Button text="Clear" onClick={clear} />
        <Button text="To upper case" onClick={toUpperCase} />
        <Button text="Capitalize" onClick={toCapitalCase} />
        <Button text="Focus" onClick={focus} />
      </Toolbar>
      <Toolbar>
        Current value: <strong>{text}</strong>
      </Toolbar>
    </>
  );
}
