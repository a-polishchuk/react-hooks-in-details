import { createContext, useContext } from 'react';
import { useTodoList } from './hooks/useTodoList';

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoContextProvider({ userId, children }) {
  const todoList = useTodoList(userId);

  return (
    <TodoContext.Provider value={todoList}>{children}</TodoContext.Provider>
  );
}
