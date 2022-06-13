import { VEGETABLES } from '../../constants';
import { getRandomInt, buildGrid } from './gridUtils';

export function spawnVegetable(state) {
  const { rows, cols, snakeHead, vegetables } = state;

  const randomVegetable = {
    row: getRandomInt(rows - 1),
    col: getRandomInt(cols - 1),
    character: VEGETABLES[getRandomInt(VEGETABLES.length - 1)],
  };

  return {
    ...state,
    vegetables: [...vegetables, randomVegetable],
    grid: buildGrid(rows, cols, snakeHead, vegetables),
  };
}
