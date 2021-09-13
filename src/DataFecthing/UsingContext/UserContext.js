import { createContext, useContext } from 'react';
import { useUser } from './hooks/useUser';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ userId, children }) {
  const user = useUser(userId);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
