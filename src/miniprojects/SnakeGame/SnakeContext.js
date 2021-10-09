import { createContext, useContext } from 'react';

export const SnakeContext = createContext({});

export function useSnakeContext() {
  return useContext(SnakeContext);
}
