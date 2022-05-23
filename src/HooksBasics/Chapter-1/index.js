import { useState } from 'react';
import Toolbar from 'components/Toolbar';
import Button from 'components/Button';

const DELAY = 2000;

export default function Chapter1() {
  const [clicks, setClicks] = useState(0);
  const [showClicks, setShowClicks] = useState(true);

  const incrementCounter = () => {
    setClicks(clicks + 1);
  };

  const incrementWithDelay = () => {
    setTimeout(() => setClicks((prevClicks) => prevClicks + 1), DELAY);
  };

  const toggleShowClicks = () => {
    setShowClicks((prevValue) => !prevValue);
  };

  return (
    <div>
      <h2>Chapter 1. useState</h2>

      {showClicks && (
        <div style={{ fontSize: 64, textShadow: '3px 3px #eadff9' }}>
          {clicks}
        </div>
      )}

      <Toolbar>
        <Button onClick={incrementCounter} text="Increment counter" />
        <Button onClick={incrementWithDelay} text="Increment with delay" />
        <Button onClick={toggleShowClicks} text="Toggle show clicks" />
      </Toolbar>
    </div>
  );
}
