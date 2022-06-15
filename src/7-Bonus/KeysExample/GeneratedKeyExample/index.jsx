import { Button } from 'components/Button';
import { useRerender } from 'hooks/useRerender';

import { LoggedLifecycle } from '../LoggedLifecycle';
import { Margin } from './Margin';

export function GeneratedKeyExample() {
  const rerender = useRerender();
  const randomKey = generateRandomKey();

  console.log(`random key: ${randomKey}`);

  return (
    <>
      <h2>How React keys really works?</h2>
      <Margin>
        <LoggedLifecycle key={randomKey} name="Random Key" />
      </Margin>
      <Margin>
        <Button text="Trigger one more render" onClick={rerender} />
      </Margin>
    </>
  );
}

function generateRandomKey() {
  return Math.random().toString();
}
