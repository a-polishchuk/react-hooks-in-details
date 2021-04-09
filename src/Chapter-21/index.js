import { useLocalStorage } from './useLocalStorage';

const DEFAULT_USER = {
  firstName: 'John',
  lastName: 'Doe',
};

const inputStyle = {
  margin: 10,
  padding: 5,
  border: '1px dashed #000',
  borderRadius: 15,
  outline: 'none',
  fontWeight: '600',
  color: '#000',
};

export default function Chapter21() {
  const [user, setUser] = useLocalStorage('user', DEFAULT_USER);
  const [position, setPosition] = useLocalStorage(
    'position',
    'React Developer'
  );
  const [age, setAge] = useLocalStorage('age', 25);

  const setFirstName = (event) => {
    setUser((user) => ({
      ...user,
      firstName: event.target.value,
    }));
  };

  const setLastName = (event) => {
    setUser((user) => ({
      ...user,
      lastName: event.target.value,
    }));
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };

  return (
    <>
      <h2>Chapter 21: useLocalStorage</h2>
      <input
        type="text"
        style={inputStyle}
        placeholder="First name"
        value={user.firstName}
        onChange={setFirstName}
      />
      <input
        type="text"
        style={inputStyle}
        placeholder="Last name"
        value={user.lastName}
        onChange={setLastName}
      />
      <input
        type="text"
        style={inputStyle}
        placeholder="Position"
        value={position}
        onChange={setPosition}
      />
      <input
        type="number"
        style={inputStyle}
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
    </>
  );
}
