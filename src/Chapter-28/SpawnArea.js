import { forwardRef } from 'react';
import Square from './Square';

const containerStyle = {
  marginTop: 20,
  border: '2px dashed gray',
  width: '100%',
  height: 300,
  position: 'relative',
};

const SpawnArea = ({ squares, onHit }, ref) => {
  return (
    <div style={containerStyle} ref={ref}>
      {squares.map((s) => (
        <Square
          key={s.id}
          id={s.id}
          left={s.left}
          top={s.top}
          wasHit={s.wasHit}
          size={s.size}
          onHit={onHit}
        />
      ))}
    </div>
  );
};

export default forwardRef(SpawnArea);
