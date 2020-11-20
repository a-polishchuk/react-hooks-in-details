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

function TextField({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export function Example() {
  const [state, setState] = useLegacyState(initialState);

  const clearState = () => setState(initialState);

  return (
    <>
      <form>
        <TextField
          label="First name"
          value={state.firstName}
          onChange={(firstName) => setState({ firstName })}
        />
        <TextField
          label="Last name"
          value={state.lastName}
          onChange={(lastName) => setState({ lastName })}
        />
        <TextField
          label="Phone"
          value={state.phone}
          onChange={(phone) => setState({ phone })}
        />
        <TextField
          label="Email"
          value={state.email}
          onChange={(email) => setState({ email })}
        />
      </form>
      <div>
        <button onClick={clearState}>CLEAR</button>
      </div>
      <div>{JSON.stringify(state)}</div>
    </>
  );
}
