import { useEffect, useState } from 'react';

export function useStateWithCallback(initialState, onUpdate) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    onUpdate(state);
  }, [onUpdate, state]);

  return [state, setState];
}
