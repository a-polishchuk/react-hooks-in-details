import { useEventListener } from '6-HooksCollection/Chapter-18/useEventListener';
import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { useReducer } from 'react';

import {
  ActionType,
  Direction,
  GameStatus,
  MOVE_DELAY,
  SPAWN_DELAY,
} from '../constants';
import GameContext from './GameContext';
import { reducer } from './reducer';
import { INITIAL_STATE } from './reducer/initialState';

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  useMoveInterval(dispatch, isPlaying);
  useSpawnInterval(dispatch, isPlaying);
  useHandleDirection(dispatch, isPlaying);

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
}

function useMoveInterval(dispatch, isPlaying) {
  useInterval(
    () => dispatch({ type: ActionType.MOVE }),
    isPlaying ? MOVE_DELAY : null
  );
}

function useSpawnInterval(dispatch, isPlaying) {
  useInterval(
    () => dispatch({ type: ActionType.SPAWN_VEGETABLE }),
    isPlaying ? SPAWN_DELAY : null
  );
}

function useHandleDirection(dispatch, isPlaying) {
  useEventListener('keydown', (event) => {
    if (!isPlaying) {
      return;
    }
    const setDirection = (direction) => {
      dispatch({
        type: ActionType.SET_DIRECTION,
        payload: direction,
      });
    };
    switch (event.code) {
      case 'ArrowUp':
        setDirection(Direction.UP);
        break;
      case 'ArrowRight':
        setDirection(Direction.RIGHT);
        break;
      case 'ArrowDown':
        setDirection(Direction.DOWN);
        break;
      case 'ArrowLeft':
        setDirection(Direction.LEFT);
        break;
      default:
        break;
    }
  });
}
