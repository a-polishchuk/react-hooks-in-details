import { useState } from 'react';
import { Button } from 'components/Button';
import { Toolbar } from 'components/Toolbar';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const onChange = (setter) => {
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

  const applyAction = (fn, fnSign) => {
    return () => {
      setAction(() => fn);
      setSign(fnSign);
    };
  };

  return (
    <>
      <h2>Chapter 5. Storing function in useState</h2>

      <Toolbar>
        <Button onClick={applyAction(add, '➕')} text="➕ Add" />
        <Button onClick={applyAction(subtract, '➖')} text="➖ Subtract" />
        <Button onClick={applyAction(divide, '➗')} text="➗ Divide" />
        <Button onClick={applyAction(multiply, '✖️')} text="✖️ Multiply" />
      </Toolbar>

      <Toolbar>
        <input type="number" value={a} onChange={onChange(setA)} />
        <div style={{ minWidth: 10, textAlign: 'center' }}>{sign}</div>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span> = {action ? action(a, b) : ''}</span>
      </Toolbar>
    </>
  );
}
