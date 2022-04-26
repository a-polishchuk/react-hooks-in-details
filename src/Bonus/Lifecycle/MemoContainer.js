import { memo, useState } from 'react';
import Button from 'components/Button';
import { LoggedLifecycle } from './LoggedLifecycle';

const MemoLoggedLifecycle = memo(LoggedLifecycle);

export function MemoContainerTest() {
  const [, setDummyState] = useState(null);

  const rerender = () => {
    setDummyState({});
  };

  return (
    <>
      <div style={{ padding: 16 }}>
        <MemoLoggedLifecycle tag="text" color="orange">
          Just a static text here.
        </MemoLoggedLifecycle>
        <MemoLoggedLifecycle tag="div" color="red">
          <div>
            Some text in a <strong>div</strong>.
          </div>
        </MemoLoggedLifecycle>
      </div>
      <LoggedLifecycle tag="Button" color="brown">
        <Button text="RE-render" onClick={rerender} />
      </LoggedLifecycle>
    </>
  );
}
