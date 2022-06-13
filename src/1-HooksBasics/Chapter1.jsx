import { useState } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ValueLabel } from 'components/ValueLabel';

const FIBONACCI = [1, 1];

export function UseStateBasics() {
  const [clicks, setClicks] = useState(0);
  const [isClicksVisible, setClicksVisible] = useState(true);
  const [someText, setSomeText] = useState('');
  const [fibonacci, setFibonacci] = useState(FIBONACCI);

  const incrementCounter = () => setClicks(clicks + 1);
  const showClicks = () => setClicksVisible(true);
  const hideClicks = () => setClicksVisible(false);

  const onInputChange = (event) => setSomeText(event.target.value);
  const clearText = () => setSomeText('');

  const addFibonacci = () => {
    const copy = [...fibonacci];
    const lastIdx = copy.length - 1;
    copy.push(copy[lastIdx] + copy[lastIdx - 1]);
    setFibonacci(copy);
  };

  return (
    <>
      <h2>Chapter 1. useState basics</h2>
      <h3>General hooks rules</h3>

      <Toolbar>
        <div style={{ minWidth: 150, marginLeft: 16 }}>
          <ValueLabel value={isClicksVisible ? clicks : '?'} />
        </div>
        <Button onClick={incrementCounter} text="Increment counter" />
        <Button
          onClick={showClicks}
          text="Show clicks"
          disabled={isClicksVisible}
        />
        <Button
          onClick={hideClicks}
          text="Hide clicks"
          disabled={!isClicksVisible}
        />
      </Toolbar>

      <Toolbar>
        <input type="text" value={someText} onChange={onInputChange} />
        <Button text="Clear" onClick={clearText} />
      </Toolbar>

      <Toolbar>
        <Button text="Add Fibonacci number" onClick={addFibonacci} />
      </Toolbar>
      <div>Fibonacci sequence: {fibonacci.join(', ')}</div>
    </>
  );
}
