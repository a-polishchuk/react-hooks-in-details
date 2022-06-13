import { useRerender } from 'hooks/useRerender';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ColoredBlock } from 'components/ColoredBlock';

import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

function Node({ level, maxLevel, path }) {
  const rerender = useRerender();

  const handleClick = (event) => {
    event.stopPropagation();
    rerender();
  };

  if (level === maxLevel) {
    return <Leaf path={path} onClick={handleClick} />;
  }

  return (
    <ColoredBlock style={nodeStyle} onClick={handleClick}>
      <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'left']} />
      <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'right']} />
    </ColoredBlock>
  );
}

export function WhenReactRenderComponents() {
  const rerender = useRerender();

  return (
    <>
      <h2>Chapter 12. useMemo</h2>
      <h3>When React render components?</h3>

      <Toolbar>
        <Button
          text="Click me to re-render the whole thing"
          onClick={rerender}
        />
      </Toolbar>

      <Node level={0} maxLevel={2} path={['root']} />
    </>
  );
}
