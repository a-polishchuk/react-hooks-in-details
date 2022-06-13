import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function useUserContext() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error(`useUser must be used within a UserContext provider`);
  }
  return user;
}

function useUser(userId) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data));
  }, [userId]);

  return user;
}

export function UserProvider({ userId, children }) {
  const user = useUser(userId);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
