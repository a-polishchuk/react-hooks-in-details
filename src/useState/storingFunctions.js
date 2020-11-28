import { useState } from 'react';

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

export function Example() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState('+');

  const applyAction = (fn, fnSign) => () => {
    setAction(() => fn);
    setSign(fnSign);
  };

  return (
    <div>
      <p>
        <button onClick={applyAction(add, '+')}>ADD</button>
        <button onClick={applyAction(subtract, '-')}>SUBTRACT</button>
        <button onClick={applyAction(multiply, '*')}>MULTIPLY</button>
        <button onClick={applyAction(divide, '/')}>DIVIDE</button>
      </p>
      <p>
        <input type="number" value={a} onChange={onChange(setA)} />
        <span> {sign} </span>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span> = {action ? action(a, b) : ''}</span>
      </p>
    </div>
  );
}
