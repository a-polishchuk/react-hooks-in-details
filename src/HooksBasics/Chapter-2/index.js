import { useState } from 'react';

function useMergedState(initialState) {
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

function FormField({ name, label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

const initialState = {
  firstName: '',
  lastName: '',
  age: 21,
};

export default function Chapter2() {
  const [data, setData] = useMergedState(initialState);

  const clear = () => setData(initialState);

  return (
    <>
      <form>
        <FormField
          name="firstName"
          label="First name"
          value={data.firstName}
          onChange={(firstName) => setData({ firstName })}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={data.lastName}
          onChange={(lastName) => setData({ lastName })}
        />
        <FormField
          name="age"
          label="Age"
          value={data.age}
          onChange={(age) => setData({ age: age ? parseInt(age) : '' })}
          type="number"
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
