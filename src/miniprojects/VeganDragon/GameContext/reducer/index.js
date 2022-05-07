import { ActionType, GameStatus } from '../../constants';
import { buildGrid } from './gridUtils';
import { setGameStatus } from './setGameStatus';
import { move } from './move';
import { spawnVegetable } from './spawnVegetable';

const GRID_SIZE = 10;
const SNAKE_HEAD = {
  row: Math.floor(GRID_SIZE / 2),
  col: Math.floor(GRID_SIZE / 2),
};

export const INITIAL_STATE = {
  gameStatus: GameStatus.IDLE,
  points: 0,
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
    default:
      return state;
  }
}
