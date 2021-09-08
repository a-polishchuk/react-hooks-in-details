import { useEffect, useState } from 'react';

export function useHistory(value) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((array) => [...array, value]);
  }, [value]);

  return history;
}
