import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [userId, setUserId] = useState(3);

  const value = {
    userId,
    setUserId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
