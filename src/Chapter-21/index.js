import { useState } from 'react';

function isFunction(valueOrFunction) {
  return typeof valueOrFunction === 'function';
}

function useLocalStorage(key, initialValue) {
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

const DEFAULT_USER = {
  firstName: 'John',
  lastName: 'Doe',
};

export default function Chapter21() {
  const [user, setUser] = useLocalStorage('user', DEFAULT_USER);
  const [counter, setCounter] = useLocalStorage('counter', 0);

  const setFirstName = (event) => {
    setUser((user) => ({
      ...user,
      firstName: event.target.value,
    }));
  };

  const setLastName = (event) => {
    setUser((user) => ({
      ...user,
      lastName: event.target.value,
    }));
  };

  const updateCounter = (event) => {
    setCounter(parseInt(event.target.value));
  };

  return (
    <>
      <h2>Chapter 21: useLocalStorage</h2>
      <p>
        <input
          type="text"
          placeholder="First name"
          value={user.firstName}
          onChange={setFirstName}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Last name"
          value={user.lastName}
          onChange={setLastName}
        />
      </p>
      <p>
        <input
          type="number"
          placeholder="Counter"
          value={counter}
          onChange={updateCounter}
        />
      </p>
    </>
  );
}
