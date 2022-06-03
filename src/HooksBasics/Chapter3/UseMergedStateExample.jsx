import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { PropsTable } from 'components/PropsTable';

import { useMergedState } from './useMergedState';

const INITIAL_STATE = {
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
  address: {
    city: 'New York',
    street: 'Broadway',
    house: '44',
  },
};

function FormField({ name, label, value, onChange, type = 'text' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ minWidth: 200 }}>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function validatePositiveNumber(stringValue) {
  if (!stringValue) {
    return null;
  }
  // do not allow negative numbers
  return Math.max(parseInt(stringValue), 0);
}

export function UseMergedStateExample() {
  const [data, setData] = useMergedState(INITIAL_STATE);

  const reset = () => setData(INITIAL_STATE);

  return (
    <>
      <h2>Chapter 3. First custom hooks</h2>
      <h3>useMergedState</h3>

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
          onChange={(age) => setData({ age: validatePositiveNumber(age) })}
          type="number"
        />
        <FormField
          name="city"
          label="City"
          value={data.address.city}
          onChange={(city) => setData({ address: { city } })}
        />
        <FormField
          name="street"
          label="Street"
          value={data.address.street}
          onChange={(street) => setData({ address: { street } })}
        />
        <FormField
          name="house"
          label="House"
          value={data.address.house}
          onChange={(house) =>
            setData({ address: { house: validatePositiveNumber(house) } })
          }
          type="number"
        />
      </form>

      <Toolbar>
        <Button onClick={reset} text="Reset" />
      </Toolbar>

      <PropsTable title="Form data" data={data} />
    </>
  );
}
