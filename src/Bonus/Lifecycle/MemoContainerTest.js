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

const containerStyle = {
  marginBottom: 16,
  padding: 16,
  backgroundColor: '#FFEEFF',
  borderRadius: 8,
};

export default function MemoContainerTest() {
  const [, rerender] = useState();

  const useMemoText = useMemo(
    () => <MemoText text="4. Text wrapped with useMemo" tag="4" color="blue" />,
    []
  );

  const renderFunc = () => (
    <LoggedLifecycle tag="5" color="brown">
      5. Text rendered with render function
    </LoggedLifecycle>
  );

  const memoizedRenderFunc = useCallback(
    () => (
      <LoggedLifecycle tag="6" color="darkcyan">
        6. Text rendered with memoized render function
      </LoggedLifecycle>
    ),
    []
  );

  console.log('>> RERENDER!');

  return (
    <>
      <h2>Components lifecycle. Memoization</h2>

      <div style={containerStyle}>
        <MemoLoggedLifecycle tag="1" color="orange">
          1. Just a static text here.
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="2" color="red">
          <span>
            2. <strong>&lt;span&gt;</strong>Also text, but inside span
            <strong>&lt;/span&gt;</strong>
          </span>
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="3" color="green">
          <MemoText text="3. Memoized text component" tag="3" color="green" />
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="4" color="blue">
          {useMemoText}
        </MemoLoggedLifecycle>

        <br />
        <MemoRenderFunc renderContent={renderFunc} />

        <br />
        <MemoRenderFunc renderContent={memoizedRenderFunc} />
      </div>

      <Button
        text="Click me to trigger new render"
        onClick={() => rerender(34)}
      />
    </>
  );
}
