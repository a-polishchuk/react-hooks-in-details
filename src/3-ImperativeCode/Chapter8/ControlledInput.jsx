import { useState, useRef } from 'react';
import { capitalize } from 'lodash';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';

export function ControlledInput() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleChange = (event) => setText(event.target.value);

  const clear = () => setText('');

  const toUpperCase = () => setText((value) => value.toUpperCase());

  const toCapitalCase = () => setText((value) => capitalize(value));

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <h2>Chapter 8. Controlled vs uncontrolled</h2>
      <h3>Controlled input</h3>
      <p>
        <span style={{ fontSize: 24 }}>ℹ️</span> State is managed by React
        (Virutal DOM side)
      </p>

      <Toolbar>
        <input
          ref={inputRef}
          type="text"
          value={text}
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
