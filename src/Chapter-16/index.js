import { useCallback, useState } from 'react';

function createMappedState(mapper) {
  return function (initialValue) {
    const [value, setValue] = useState(mapper(initialValue));

    const setMappedValue = useCallback((newValue) => {
      setValue(mapper(newValue));
    }, []);

    return [value, setMappedValue];
  };
}

const useLowercaseState = createMappedState((newValue) =>
  newValue.toLowerCase()
);

const useUppercaseState = createMappedState((newValue) =>
  newValue.toUpperCase()
);

const useTrimmedState = createMappedState((newValue) => newValue.trim());

function Field({ label, value, setValue }) {
  return (
    <div style={{ margin: 10 }}>
      <span style={{ marginRight: 10 }}>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default function Chapter16() {
  const [lowercase, setLowercase] = useLowercaseState('SOME VALUE');
  const [uppercase, setUppercase] = useUppercaseState('some value');
  const [trimmed, setTrimmed] = useTrimmedState(' some value    ');

  return (
    <>
      <h2>Chapter 16: Hooks Factory</h2>
      <Field
        label="Lowercase only:"
        value={lowercase}
        setValue={setLowercase}
      />
      <Field
        label="Uppercase only:"
        value={uppercase}
        setValue={setUppercase}
      />
      <Field label="No spaces here:" value={trimmed} setValue={setTrimmed} />
    </>
  );
}
