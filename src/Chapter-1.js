import { useState } from 'react';

export function Clicker() {
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
      <button onClick={onClick}>
        {showClicks ? `Click me! ${clicks}` : 'Click me!'}
      </button>
      <button onClick={toggleShowClicks}>Toggle show clicks</button>
    </div>
  );
}
