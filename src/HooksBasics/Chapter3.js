import { useState } from 'react';
import Button from 'components/Button';
import ValueLabel from 'components/ValueLabel';

export function useCounter(initialValue = 0, delta = 1) {
  const [value, setValue] = useState(initialValue);
  const increase = () => setValue((prevValue) => prevValue + delta);
  const decrease = () => setValue((prevValue) => prevValue - delta);
  return {
    value,
    increase,
    decrease,
  };
}

function ClicksCounter() {
  const { value: clicks, increase } = useCounter(0, 1);
  const text = 'Click me! '.repeat(clicks + 1);
  return (
    <div
      style={{ padding: 16, cursor: 'pointer', userSelect: 'none' }}
      onClick={() => increase()}
    >
      {text}
    </div>
  );
}

function DecadePicker({ initialValue }) {
  const { value: year, increase, decrease } = useCounter(initialValue, 10);
  return (
    <div style={{ padding: 10 }}>
      <div style={{ fontSize: 24 }}>Pick a decade:</div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button onClick={decrease} text="-" />
        <ValueLabel value={`${year}'s`} />
        <Button onClick={increase} text="+" />
      </div>
    </div>
  );
}

export function Chapter3() {
  return (
    <>
      <h2>Chapter 3. First custom hook</h2>
      <ClicksCounter />
      <DecadePicker initialValue={1970} />
    </>
  );
}
