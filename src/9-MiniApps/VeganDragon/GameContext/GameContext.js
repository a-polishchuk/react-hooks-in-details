import { createContext, useContext } from 'react';

export const GameContext = createContext({});

export function useGameContext() {
  return useContext(GameContext);
}
