import { useToggle } from './useToggle';

function ToggleButton({ toggled, handleToggle }) {
  const caption = toggled ? 'ON' : 'OFF';
  return (
    <button style={{ width: 100 }} onClick={handleToggle}>
      {caption}
    </button>
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

export default function Chapter17() {
  return (
    <>
      <h2>Chapter 17: useToggle version 2.0</h2>
      <SettingsToggle label="Audio Enabled" initialValue={true} />
      <SettingsToggle label="Video Enabled" initialValue={true} />
    </>
  );
}
