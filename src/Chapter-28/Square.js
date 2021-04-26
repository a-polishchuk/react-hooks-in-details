import { memo } from 'react';

const Square = memo(({ id, left, top, size, wasHit, onHit }) => {
  const onMouseEnter = () => {
    onHit(id);
  };

  const style = {
    position: 'absolute',
    left,
    top,
    width: size,
    height: size,
    backgroundColor: wasHit ? '#8008' : '#800',
  };

  return <div onMouseEnter={onMouseEnter} style={style} />;
});

export default Square;
