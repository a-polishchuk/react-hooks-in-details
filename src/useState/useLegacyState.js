import { useState } from 'react';

// React Hooks FAQ says:

// NOTE: When we update a state variable, we replace its value.
// This is different from this.setState in a class,
// which merges the updated fields into the object.

// If you miss automatic merging, you could write a custom useLegacyState Hook
// that merges object state updates.
// NOTE: However, we recommend to split state into multiple state variables
// based on which values tend to change together.

export function useLegacyState(initialState) {
  const [state, setState] = useState(initialState);

  const mergeState = (changes) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...changes,
      };
    });
  };

  return [state, mergeState];
}
