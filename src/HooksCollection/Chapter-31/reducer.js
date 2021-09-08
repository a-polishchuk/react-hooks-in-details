import { ActionType, AsyncStatus } from './constants';

export const INITIAL_STATE = {
  status: AsyncStatus.IDLE,
  result: null,
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.RUN:
      return {
        ...state,
        status: AsyncStatus.PENDING,
      };
    case ActionType.SUCCESS:
      return {
        status: AsyncStatus.SUCCESS,
        result: action.payload,
        error: null,
      };
    case ActionType.ERROR:
      return {
        status: AsyncStatus.ERROR,
        result: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unknown action type ${state.type}`);
  }
}
