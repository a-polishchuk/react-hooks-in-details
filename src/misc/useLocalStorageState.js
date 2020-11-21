import { useEffect, useState } from 'react';

export function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? defaultValue;
  });

  const handleSetValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, handleSetValue];
}

export function useLocalStorageState2(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? defaultValue;
  });

  // NOTE: will be executed AFTER the render, UI will always display an
  // outdated, previous localStorage value
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export function Example() {
  const [name, setName] = useLocalStorageState('key.name', '');
  const [age, setAge] = useLocalStorageState('key.age', 21);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Name: {localStorage.getItem('key.name')}</p>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <p>Age: {localStorage.getItem('key.age')}</p>
    </div>
  );
}
