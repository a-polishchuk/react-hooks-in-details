import { ActionType, GameStatus } from '../../constants';
import { buildGrid } from './gridUtils';
import { spawnVegetable } from './spawnVegetable';
import { move } from './move';

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

function setGameStatus(state, gameStatus) {
  return {
    ...state,
    gameStatus,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.PLAY:
      return setGameStatus(state, GameStatus.PLAYING);
    case ActionType.PAUSE:
      return setGameStatus(state, GameStatus.PAUSED);
    case ActionType.FINISH:
      return setGameStatus(state, GameStatus.FINISHED);
    case ActionType.MOVE:
      return move(state, action.payload);
    case ActionType.SPAWN_VEGETABLE:
      return spawnVegetable(state);
    case ActionType.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
