import { useState } from 'react';
import Button from 'components/Button';

export default function Chapter1() {
  const [clicks, setClicks] = useState(0);
  const [showClicks, setShowClicks] = useState(true);

  const onClick = () => {
    setTimeout(() => {
      setClicks((prevClicks) => prevClicks + 1);
    }, 2000);
  };

  const toggleShowClicks = () => setShowClicks((prevValue) => !prevValue);

  return (
    <div>
      <h2>Chapter 1. useState</h2>

      <div style={{ display: 'flex', gap: 10 }}>
        <Button
          onClick={onClick}
          text={showClicks ? `Click me! ${clicks}` : 'Click me!'}
        />
        <Button onClick={toggleShowClicks} text="Toggle show clicks" />
      </div>
    </div>
  );
}
