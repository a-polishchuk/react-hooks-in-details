import { Button } from 'components/Button';
import { useState, useRef } from 'react';
import { Switch, Case, DefaultCase } from './Switch';

export default function SwitchTest() {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const handleReset = () => {
    setValue(0);
    inputRef.current?.focus();
  };

  return (
    <>
      <h2>Conditional rendering. Switch</h2>
      <div style={{ paddingBottom: 10 }}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={handleChange}
        />
      </div>
      <Switch value={value}>
        <Case condition={(val) => val < 0}>
          <Button text="Reset" onClick={handleReset} />
        </Case>
        <Case condition={(val) => val < -10}>
          <div style={{ marginTop: 16 }}>This is very low value</div>
        </Case>
        <Case value={0}>
          <strong>Zero</strong>
        </Case>
        <Case value={1}>
          <i>First</i>
        </Case>
        <Case value={2}>
          <span style={{ color: 'red' }}>Second</span>
        </Case>
        <Case value={3}>
          <span style={{ color: 'orange' }}>Third</span>
        </Case>
        <DefaultCase>
          <span style={{ fontSize: 10 + value }}>{`${value}th`}</span>
        </DefaultCase>
      </Switch>
    </>
  );
}
