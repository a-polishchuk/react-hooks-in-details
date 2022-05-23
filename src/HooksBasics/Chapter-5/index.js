import { useState } from 'react';
import Button from 'components/Button';

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

export default function Chapter5() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState('+');

  const applyAction = (fn, fnSign) => {
    return () => {
      setAction(() => fn);
      setSign(fnSign);
    };
  };

  return (
    <>
      <h2>Chapter 5. Storing function in useState</h2>

      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <Button onClick={applyAction(add, '+')} text="Add" />
        <Button onClick={applyAction(subtract, '-')} text="Subtract" />
        <Button onClick={applyAction(divide, '/')} text="Divide" />
        <Button onClick={applyAction(multiply, '*')} text="Multiply" />
      </div>

      <p>
        <input type="number" value={a} onChange={onChange(setA)} />
        <span> {sign} </span>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span> = {action ? action(a, b) : ''}</span>
      </p>
    </>
  );
}
