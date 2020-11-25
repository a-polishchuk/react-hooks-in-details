import { useState } from 'react';

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

export function FormExample() {
  const [data, setData] = useState(initialState);

  const clear = () => setData(initialState);

  return (
    <>
      <form>
        <FormField
          name="firstName"
          label="First name"
          value={data.firstName}
          onChange={(firstName) =>
            setData((prevData) => ({
              ...prevData,
              firstName,
            }))
          }
        />
        <FormField
          name="lastName"
          label="Last name"
          value={data.lastName}
          onChange={(lastName) =>
            setData((prevData) => ({
              ...prevData,
              lastName,
            }))
          }
        />
        <FormField
          name="age"
          label="Age"
          value={data.age}
          onChange={(age) =>
            setData((prevData) => ({
              ...prevData,
              age: age ? parseInt(age) : '',
            }))
          }
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
