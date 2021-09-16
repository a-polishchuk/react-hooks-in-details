import { createContext, useContext, useState } from 'react';

const USER_ID = 2;
const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [userId, setUserId] = useState(USER_ID);

  const value = {
    userId,
    setUserId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
