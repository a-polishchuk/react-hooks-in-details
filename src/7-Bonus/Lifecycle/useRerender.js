import { useState } from 'react';

export function useRerender() {
  const [, setDummyState] = useState();

  return () => setDummyState({});
}
