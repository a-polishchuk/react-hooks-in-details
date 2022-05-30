import { useCallback, useState } from 'react';
import { Toolbar } from 'components/Toolbar';

function createMappedState(mapper) {
  return function (initialValue) {
    const [value, setValue] = useState(mapper(initialValue));

    const setMappedValue = useCallback((newValue) => {
      setValue(mapper(newValue));
    }, []);

    return [value, setMappedValue];
  };
}

const useLowercaseState = createMappedState((newValue) => {
  return newValue?.toLowerCase();
});

const useUppercaseState = createMappedState((newValue) => {
  return newValue?.toUpperCase();
});

const useNoSpacesState = createMappedState((newValue) => {
  return newValue?.replaceAll(/\s/, '');
});

function Field({ label, value, onChange }) {
  return (
    <Toolbar>
      <div style={{ minWidth: 200 }}>{label}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Toolbar>
  );
}

export function HooksFactory() {
  const [lowercase, setLowercase] = useLowercaseState('SOME VALUE');
  const [uppercase, setUppercase] = useUppercaseState('some value');
  const [noSpaces, setNoSpaces] = useNoSpacesState('  SOME VALUE    ');

  return (
    <>
      <h2>Chapter 16: Hooks Factory</h2>
      <Field label="lowercase only" value={lowercase} onChange={setLowercase} />
      <Field label="UPPERCASE ONLY" value={uppercase} onChange={setUppercase} />
      <Field label="NoSpacesHere" value={noSpaces} onChange={setNoSpaces} />
    </>
  );
}
