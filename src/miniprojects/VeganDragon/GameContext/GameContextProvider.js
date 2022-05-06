import { useReducer } from 'react';
import { useInterval } from 'react-use';
import { reducer, INITIAL_STATE } from './reducer';
import { ActionType, GameStatus, MOVE_DELAY, SPAWN_DELAY } from '../constants';
import { useDirectionRef } from './useDirectionRef';
import GameContext from './GameContext';

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const isPlaying = state.gameStatus === GameStatus.PLAYING;
  const directionRef = useDirectionRef();

  useInterval(
    () => {
      dispatch({
        type: ActionType.MOVE,
        payload: directionRef.current,
      });
    },
    isPlaying ? MOVE_DELAY : null
  );

  useInterval(
    () => {
      dispatch({
        type: ActionType.SPAWN_VEGETABLE,
      });
    },
    isPlaying ? SPAWN_DELAY : null
  );

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
}
