import { useState } from 'react';
import { Button } from 'components/Button';
import { Toolbar } from 'components/Toolbar';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const buildOnChange = (setter) => {
  return (event) => {
    const { value } = event.target;
    setter(value ? parseFloat(value) : 0);
  };
};

export function StoringFunctions() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState('➕');

  const buildClickHandler = (fn, fnSign) => {
    return () => {
      setAction(() => fn);
      setSign(fnSign);
    };
  };

  return (
    <>
      <h2>Chapter 5. Storing function in useState</h2>

      <Toolbar>
        <Button onClick={buildClickHandler(add, '➕')} text="➕ Add" />
        <Button
          onClick={buildClickHandler(subtract, '➖')}
          text="➖ Subtract"
        />
        <Button onClick={buildClickHandler(divide, '➗')} text="➗ Divide" />
        <Button
          onClick={buildClickHandler(multiply, '✖️')}
          text="✖️ Multiply"
        />
      </Toolbar>

      <Toolbar>
        <input type="number" value={a} onChange={buildOnChange(setA)} />
        <div style={{ minWidth: 10, textAlign: 'center' }}>{sign}</div>
        <input type="number" value={b} onChange={buildOnChange(setB)} />
        <span> = {action ? action(a, b) : ''}</span>
      </Toolbar>
    </>
  );
}
