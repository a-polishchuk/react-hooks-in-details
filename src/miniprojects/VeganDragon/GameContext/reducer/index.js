import { ActionType, GameStatus, Direction } from '../../constants';
import { buildGrid } from './gridUtils';
import { setGameStatus } from './setGameStatus';
import { spawnVegetable } from './spawnVegetable';
import { setDirection } from './setDirection';
import { move } from './move';

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

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.PLAY:
      return setGameStatus(state, GameStatus.PLAYING);
    case ActionType.PAUSE:
      return setGameStatus(state, GameStatus.PAUSED);
    case ActionType.FINISH:
      return setGameStatus(state, GameStatus.FINISHED);
    case ActionType.PLAY_AGAIN:
      return {
        ...INITIAL_STATE,
        gameStatus: GameStatus.PLAYING,
      };
    case ActionType.MOVE:
      return move(state, action.payload);
    case ActionType.SPAWN_VEGETABLE:
      return spawnVegetable(state);
    case ActionType.SET_DIRECTION:
      return setDirection(state, action.payload);
    default:
      return state;
  }
}
