import { useCallback, useDebugValue, useState } from 'react';
import { Button } from 'components/Button';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue || false);

  useDebugValue(value);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle];
}

function ToggleButton({ toggled, handleToggle }) {
  const caption = toggled ? 'ON' : 'OFF';
  return (
    <div style={{ width: 100 }}>
      <Button text={caption} onClick={handleToggle} />
    </div>
  );
}

function SettingsToggle({ label, initialValue }) {
  const [isEnabled, toggleEnabled] = useToggle(initialValue);
  return (
    <div style={{ margin: 10 }}>
      <ToggleButton toggled={isEnabled} handleToggle={toggleEnabled} />
      <span style={{ marginLeft: 10 }}>{label}</span>
    </div>
  );
}

export function UseDebugValueExample() {
  return (
    <>
      <h2>Chapter 15: useDebugValue, React Dev Tools</h2>
      <SettingsToggle label="Audio Enabled" initialValue={true} />
      <SettingsToggle label="Video Enabled" initialValue={false} />
    </>
  );
}
