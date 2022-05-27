import { useState } from 'react';
import Toolbar from 'components/Toolbar';
import Button from 'components/Button';
import ValueLabel from 'components/ValueLabel';

const DELAY = 2000;

export function PreviousStateUpdate() {
  const [clicks, setClicks] = useState(0);
  const [isClicksVisible, setClicksVisible] = useState(true);

  const incrementCounter = () => {
    setClicks(clicks + 1);
  };

  const incrementWithDelay = () => {
    setTimeout(() => setClicks((prevClicks) => prevClicks + 1), DELAY);
  };

  const toggleShowClicks = () => {
    setClicksVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <h2>Chapter 2. Previous state update</h2>
      <Toolbar>
        <div style={{ minWidth: 150, marginLeft: 16 }}>
          <ValueLabel value={isClicksVisible ? clicks : '?'} />
        </div>
        <Button onClick={incrementCounter} text="Increment counter" />
        <Button onClick={incrementWithDelay} text="Increment with delay" />
        <Button onClick={toggleShowClicks} text="Toggle show clicks" />
      </Toolbar>
    </>
  );
}
