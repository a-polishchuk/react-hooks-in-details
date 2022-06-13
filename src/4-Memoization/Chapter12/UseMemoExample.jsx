import { memo, useMemo } from 'react';
import { useRerender } from 'hooks/useRerender';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ColoredBlock } from 'components/ColoredBlock';

import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

const MemoizedNode = memo(({ level, maxLevel, path }) => {
  const rerender = useRerender();
  const leftPath = useMemo(() => [...path, 'left'], [path]);
  const rightPath = useMemo(() => [...path, 'right'], [path]);

  const handleClick = (event) => {
    event.stopPropagation();
    rerender();
  };

  if (level === maxLevel) {
    return <Leaf path={path} onClick={handleClick} />;
  }

  return (
    <ColoredBlock style={nodeStyle} onClick={handleClick}>
      <MemoizedNode level={level + 1} maxLevel={maxLevel} path={leftPath} />
      <MemoizedNode level={level + 1} maxLevel={maxLevel} path={rightPath} />
    </ColoredBlock>
  );
});

export function UseMemoExample() {
  const rerender = useRerender();

  return (
    <>
      <h2>Chapter 12. useMemo</h2>
      <h3>React.memo + useMemo</h3>

      <Toolbar>
        <Button
          text="Click me to re-render the whole thing"
          onClick={rerender}
        />
      </Toolbar>

      <MemoizedNode level={0} maxLevel={2} path={['root']} />
    </>
  );
}
