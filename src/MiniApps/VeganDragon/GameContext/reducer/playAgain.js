import { GameStatus } from '../../constants';
import { INITIAL_STATE } from './initialState';

export function playAgain() {
  return {
    ...INITIAL_STATE,
    gameStatus: GameStatus.PLAYING,
  };
}
