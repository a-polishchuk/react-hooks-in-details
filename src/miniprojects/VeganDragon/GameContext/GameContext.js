import { createContext, useContext } from 'react';

const GameContext = createContext({});

export function useGameContext() {
  return useContext(GameContext);
}

export default GameContext;
