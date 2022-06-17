import { Direction } from '../constants';

export function CurrentDirection({ direction }) {
  const emoji = getDirectionEmoji(direction);

  return <span>{emoji.repeat(3)}</span>;
}

function getDirectionEmoji(direction) {
  switch (direction) {
    case Direction.UP:
      return '👆';
    case Direction.RIGHT:
      return '👉';
    case Direction.DOWN:
      return '👇';
    case Direction.LEFT:
      return '👈';
    default:
      throw new Error(`Unknown direction ${direction}`);
  }
}
