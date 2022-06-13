import { useState } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Switch, Case } from './Switch';

function Field({ label, value, setValue }) {
  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <Toolbar>
      <div style={{ minWidth: 150 }}>{label}</div>
      <input type="number" value={value} onChange={handleChange} />
    </Toolbar>
  );
}

export default function SwitchTest() {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  return (
    <>
      <h2>Conditional rendering. Switch</h2>

      <Field
        label="Temperature"
        value={temperature}
        setValue={setTemperature}
      />
      <Field label="Wind speed" value={windSpeed} setValue={setWindSpeed} />

      <div style={{ fontSize: 64 }}>
        <Toolbar>
          <Switch value={temperature}>
            <Case condition={(val) => val < -10}>☃️</Case>
            <Case condition={(val) => val < 0}>❄️</Case>
            <Case value={0}>🌡️</Case>
            <Case condition={(val) => val > 0}>☀️</Case>
            <Case condition={(val) => val > 15}>☀️</Case>
            <Case condition={(val) => val > 25}>🔥</Case>
          </Switch>
          <Switch value={windSpeed}>
            <Case condition={(val) => val >= 20 && val < 60}>🌬</Case>
            <Case condition={(val) => val >= 60}>🌪</Case>
          </Switch>
        </Toolbar>
      </div>
    </>
  );
}
