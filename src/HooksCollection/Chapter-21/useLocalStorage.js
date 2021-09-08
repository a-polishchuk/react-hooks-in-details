import { useState } from 'react';

function isFunction(valueOrFunction) {
  return typeof valueOrFunction === 'function';
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      const evaluated = isFunction(initialValue)
        ? initialValue()
        : initialValue;
      window.localStorage.setItem(key, JSON.stringify(evaluated));
      return evaluated;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      const evaluated = isFunction(newValue) ? newValue(storedValue) : newValue;
      window.localStorage.setItem(key, JSON.stringify(evaluated));
      setStoredValue(evaluated);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
