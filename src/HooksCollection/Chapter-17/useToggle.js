import { useReducer } from 'react';

export function useToggle(initialValue) {
  return useReducer((state) => !state, initialValue || false);
}
