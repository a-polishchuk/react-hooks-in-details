import { GameStatus, Direction } from '../../constants';
import { buildGrid } from './gridUtils';

const GRID_SIZE = 10;
const SNAKE_HEAD = {
  row: Math.floor(GRID_SIZE / 2),
  col: Math.floor(GRID_SIZE / 2),
};

export const INITIAL_STATE = {
  gameStatus: GameStatus.IDLE,
  points: 0,
  direction: Direction.UP,
  rows: GRID_SIZE,
  cols: GRID_SIZE,
  vegetables: [],
  snakeHead: SNAKE_HEAD,
  grid: buildGrid(GRID_SIZE, GRID_SIZE, SNAKE_HEAD, []),
};
