import { useCallback, useState } from 'react';

export function useRerender() {
  const [, setDummyState] = useState();

  const rerender = useCallback(() => setDummyState({}), []);

  return rerender;
}
