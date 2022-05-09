import { ActionType, GameStatus } from '../../constants';
import { setGameStatus } from './setGameStatus';
import { playAgain } from './playAgain';
import { spawnVegetable } from './spawnVegetable';
import { setDirection } from './setDirection';
import { move } from './move';

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.PLAY:
      return setGameStatus(state, GameStatus.PLAYING);
    case ActionType.PAUSE:
      return setGameStatus(state, GameStatus.PAUSED);
    case ActionType.FINISH:
      return setGameStatus(state, GameStatus.FINISHED);
    case ActionType.PLAY_AGAIN:
      return playAgain();
    case ActionType.MOVE:
      return move(state, action.payload);
    case ActionType.SPAWN_VEGETABLE:
      return spawnVegetable(state);
    case ActionType.SET_DIRECTION:
      return setDirection(state, action.payload);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}
