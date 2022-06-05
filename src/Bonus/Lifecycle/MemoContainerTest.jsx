import { memo, useCallback, useMemo } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ColoredBlock } from 'components/ColoredBlock';

import { LoggedLifecycle, useLoggedLifecycle } from './LoggedLifecycle';
import { useRerender } from './useRerender';

const MemoLoggedLifecycle = memo(LoggedLifecycle);

const MemoText = memo(({ tag, color, text }) => {
  useLoggedLifecycle(tag, color);
  return text;
});

const MemoRenderFunc = memo(({ tag, color, renderContent }) => {
  useLoggedLifecycle(tag, color);
  return renderContent();
});

export function MemoContainerTest() {
  const rerender = useRerender();

  const useMemoText = useMemo(
    () => (
      <MemoText
        text="4. Text wrapped with useMemo"
        tag="4. useMemoText"
        color="blue"
      />
    ),
    []
  );

  const renderFunc = () => (
    <LoggedLifecycle tag="5. Render func" color="darkcyan">
      5. Text rendered with render function
    </LoggedLifecycle>
  );

  const memoizedRenderFunc = useCallback(
    () => (
      <LoggedLifecycle tag="6. useCallback(render func)" color="magenta">
        6. Text rendered with memoized render function
      </LoggedLifecycle>
    ),
    []
  );

  return (
    <>
      <h2>Components lifecycle. Memoization</h2>

      <ColoredBlock>
        <MemoLoggedLifecycle tag="1. Static text parent" color="orange">
          1. Just a static text here.
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="2. Span parent" color="red">
          <span>
            2. <strong>&lt;span&gt;</strong>Also text, but inside span
            <strong>&lt;/span&gt;</strong>
          </span>
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="3. MemoText parent" color="green">
          <MemoText
            text="3. Memoized text component"
            tag="3. MemoText"
            color="green"
          />
        </MemoLoggedLifecycle>

        <br />
        <MemoLoggedLifecycle tag="4. useMemoText parent" color="blue">
          {useMemoText}
        </MemoLoggedLifecycle>

        <br />
        <MemoRenderFunc
          tag="5. MemoRenderFunc"
          color="darkcyan"
          renderContent={renderFunc}
        />

        <br />
        <MemoRenderFunc
          tag="6. MemoRenderFunc"
          color="magenta"
          renderContent={memoizedRenderFunc}
        />
      </ColoredBlock>

      <Toolbar>
        <Button text="Click me to trigger new render" onClick={rerender} />
      </Toolbar>
    </>
  );
}
