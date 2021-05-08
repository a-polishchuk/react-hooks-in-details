import { useState } from 'react';
import LoggedLifecycle from './LoggedLifecycle';
import Margin from './Margin';

export default function GeneratedKeyExample() {
  const [, setTrigger] = useState();

  const triggerRender = () => {
    setTrigger({});
  };

  const randomKey = generateRandomKey();

  console.log(`random key: ${randomKey}`);

  return (
    <>
      <h2>How React keys really works?</h2>
      <Margin>
        <LoggedLifecycle key={randomKey} />
      </Margin>
      <Margin>
        <button onClick={triggerRender}>Trigger one more render</button>
      </Margin>
    </>
  );
}

function generateRandomKey() {
  return Math.random().toString();
}
