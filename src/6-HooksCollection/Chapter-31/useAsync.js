import { useCallback, useReducer } from 'react';
import { useMountedRef } from '../Chapter-29/useMountedRef';
import { reducer, INITIAL_STATE } from './reducer';
import { ActionType, AsyncStatus } from './constants';

export function useAsync(asyncFunc) {
  const mountedRef = useMountedRef();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { status, result, error } = state;

  const run = useCallback(() => {
    if (status === AsyncStatus.PENDING) {
      console.error('Still pending, cannot run again...');
      return;
    }

    dispatch({ type: ActionType.RUN });
    asyncFunc()
      .then((response) => {
        if (mountedRef.current) {
          dispatch({
            type: ActionType.SUCCESS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        if (mountedRef.current) {
          dispatch({
            type: ActionType.ERROR,
            payload: error,
          });
        }
      });
  }, [status, asyncFunc, mountedRef]);

  return { run, status, result, error };
}
