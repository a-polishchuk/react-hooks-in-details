import { useReducer } from 'react';
import { useInterval } from 'react-use';
import { reducer, INITIAL_STATE } from './reducer';
import { ActionType, MOVE_DELAY, SPAWN_DELAY } from './constants';
import { useDirectionRef } from './useDirectionRef';
import { SnakeContext } from './SnakeContext';

export default function SnakeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const directionRef = useDirectionRef();

  useInterval(() => {
    dispatch({
      type: ActionType.MOVE,
      payload: directionRef.current,
    });
  }, MOVE_DELAY);

  useInterval(() => {
    dispatch({
      type: ActionType.SPAWN_VEGETABLE,
    });
  }, SPAWN_DELAY);

  return (
    <SnakeContext.Provider value={state}>{children}</SnakeContext.Provider>
  );
}
