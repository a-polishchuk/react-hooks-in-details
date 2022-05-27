import { cloneDeep, merge } from 'lodash';
import { useState } from 'react';

export function useMergedState(initialState) {
  const [state, setState] = useState(initialState);

  const mergeState = (changes) => {
    setState((prevState) => {
      const clone = cloneDeep(prevState);
      return merge(clone, changes);
    });
  };

  return [state, mergeState];
}
