import { useState } from 'react';

export function useRerender() {
  const [, setDummyState] = useState();

  const rerender = () => setDummyState({});

  return rerender;
}
