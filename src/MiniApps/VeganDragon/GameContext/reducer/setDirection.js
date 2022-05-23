import { Direction } from '../../constants';

export function setDirection(state, newDirection) {
  const { direction } = state;

  if (newDirection === Direction.opposite(direction)) {
    return state;
  }

  return {
    ...state,
    direction: newDirection,
  };
}
