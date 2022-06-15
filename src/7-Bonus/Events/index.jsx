import { useState } from 'react';
import { Field } from './Field';
import { EventsTest } from './EventsTest';

export function EventsExample() {
  const [capturePhase, setCapturePhase] = useState(false);
  const [stopPropagation, setStopPropagation] = useState(false);

  return (
    <>
      <h2>Events</h2>
      <h3>Bubbling, Capturing, stopPropagation</h3>
      <Field
        name="capturePhase"
        label="Capture phase"
        value={capturePhase}
        onChange={setCapturePhase}
      />
      <Field
        name="stopPropagation"
        label="Stop propagation"
        value={stopPropagation}
        onChange={setStopPropagation}
      />
      <EventsTest
        capturePhase={capturePhase}
        stopPropagation={stopPropagation}
      />
    </>
  );
}
