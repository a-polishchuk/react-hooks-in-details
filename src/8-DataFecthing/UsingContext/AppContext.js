import { createContext, useContext } from 'react';
import { useUser } from './hooks/useUser';
import { useTodoList } from './hooks/useTodoList';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ userId, children }) {
  const user = useUser(userId);
  const todoList = useTodoList(userId);

  const value = {
    user,
    todoList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
