import { memo, useCallback, useMemo, useState } from 'react';
import Button from 'components/Button';
import { LoggedLifecycle, useLoggedLifecycle } from './LoggedLifecycle';

const MemoLoggedLifecycle = memo(LoggedLifecycle);

const MemoText = memo(({ tag, color, text }) => {
  useLoggedLifecycle(tag, color);
  return text;
});

const MemoRenderFunc = memo(({ renderContent }) => {
  useLoggedLifecycle('Render func parent', 'darkcyan');
  return renderContent();
});

export default function MemoContainerTest() {
  const [, setDummyState] = useState(null);

  const rerender = () => {
    setDummyState({});
  };

  const useMemoText = useMemo(
    () => (
      <MemoText
        text="4. Text wrapped with useMemo"
        tag="useMemo"
        color="blue"
      />
    ),
    []
  );

  const renderFunc = useCallback(
    () => (
      <LoggedLifecycle tag="Render func" color="darkcyan">
        5. Text rendered via renderFunc
      </LoggedLifecycle>
    ),
    []
  );

  return (
    <>
      <div style={{ padding: 16 }}>
        <MemoLoggedLifecycle tag="text parent" color="orange">
          1. Just a static text here.
        </MemoLoggedLifecycle>
        <MemoLoggedLifecycle tag="div parent" color="red">
          <div>
            2. Some text in a <strong>div</strong>.
          </div>
        </MemoLoggedLifecycle>
        <MemoLoggedLifecycle tag="Memoized text parent" color="green">
          <MemoText
            text="3. Memoized text component"
            tag="Memoized text"
            color="green"
          />
        </MemoLoggedLifecycle>
        <br />
        <MemoLoggedLifecycle tag="useMemo parent" color="blue">
          {useMemoText}
        </MemoLoggedLifecycle>
        <br />
        <MemoRenderFunc renderContent={renderFunc} />
      </div>
      <LoggedLifecycle tag="Button" color="brown">
        <Button text="RE-render" onClick={rerender} />
      </LoggedLifecycle>
    </>
  );
}
