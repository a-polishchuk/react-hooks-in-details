import { useState } from 'react';

const DEFAULT_AGE = 21;

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

export function FormExample() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(DEFAULT_AGE);

  const clear = () => {
    setFirstName('');
    setLastName('');
    setAge(DEFAULT_AGE);
  };

  return (
    <>
      <form>
        <FormField
          name="firstName"
          label="First name"
          value={firstName}
          onChange={(newValue) => setFirstName(newValue)}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={lastName}
          onChange={(newValue) => setLastName(newValue)}
        />
        <FormField
          name="age"
          label="Age"
          value={age}
          onChange={(newValue) => setAge(newValue ? parseInt(newValue) : '')}
          type="number"
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        firstName: {firstName},<br />
        lastName: {lastName}, <br />
        age: {age}
      </div>
    </>
  );
}
