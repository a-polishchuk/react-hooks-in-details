import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { useRerender } from 'hooks/useRerender';

import { useBallPosition } from './useBallPosition';

const MIN_STEP = 20;
const MAX_STEP = 100;

function buildStyle(left, top) {
  return {
    position: 'absolute',
    fontSize: 64,
    transition: 'all 0.5s ease-in-out',
    transform: `rotate(${Math.random() * 360}deg)`,
    left,
    top,
  };
}

export function YouDontNeedUseEffect() {
  const [left, top] = useBallPosition(MIN_STEP, MAX_STEP);
  const style = buildStyle(left, top);
  const rerender = useRerender();

  return (
    <>
      <h2>Chapter 6. useEffect</h2>
      <h3>
        You don't need <i>useEffect</i>. Maybe <i>useMemo</i> will do the thing?
      </h3>

      <Toolbar>
        <Button text="Click me to re-render the component" onClick={rerender} />
      </Toolbar>
      <div style={{ fontSize: 18 }}>
        ➡️ ⬅️ ⬆️ ⬇️ Use arrow keys to move the ball.
      </div>

      <div style={{ position: 'relative' }}>
        <div style={style}>⚽️</div>
      </div>
    </>
  );
}
