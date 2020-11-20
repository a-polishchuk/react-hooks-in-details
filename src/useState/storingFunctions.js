import { useState } from 'react';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export function Example() {
  const [action, setAction] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setAction(() => add)}>ADD</button>
        <button onClick={() => setAction(() => subtract)}>SUBTRACT</button>
        <button onClick={() => setAction(() => multiply)}>MULTIPLY</button>
        <button onClick={() => setAction(() => divide)}>DIVIDE</button>
      </div>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseFloat(e.target.value))}
      />

      <p>Result: {action ? action(a, b) : '--'}</p>
    </div>
  );
}
