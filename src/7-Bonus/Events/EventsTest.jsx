import { useState, useRef } from 'react';
import { styles } from './styles';

const SHOW_DELAY = 1000;

export function EventsTest({ capturePhase, stopPropagation }) {
  const [redClicked, setRedClicked] = useState(false);
  const [greenClicked, setGreenClicked] = useState(false);
  const [blueClicked, setBlueClicked] = useState(false);

  const redTimeoutRef = useRef(null);
  const greenTimeoutRef = useRef(null);
  const blueTimeoutRef = useRef(null);

  const [path, setPath] = useState(null);
  const [eventPhase, setEventPhase] = useState();

  const handleClick = (event, setter, timeoutRef) => {
    setEventPhase(event.eventPhase);
    if (stopPropagation) {
      event.stopPropagation();
    }
    setPath(event.nativeEvent.path);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setter(true);
    timeoutRef.current = setTimeout(() => {
      setter(false);
      timeoutRef.current = null;
    }, SHOW_DELAY);
  };

  const handleRedClick = (event) => {
    handleClick(event, setRedClicked, redTimeoutRef);
  };

  const handleGreenClick = (event) => {
    handleClick(event, setGreenClicked, greenTimeoutRef);
  };

  const handleBlueClick = (event) => {
    handleClick(event, setBlueClicked, blueTimeoutRef);
  };

  const clickProps = (onClick) => {
    if (capturePhase) {
      return { onClickCapture: onClick };
    }
    return { onClick };
  };

  return (
    <>
      <p>
        Event phase: <strong>{getEventPhaseText(eventPhase)}</strong>
      </p>
      <div id="container" style={styles.container}>
        <div id="red" style={styles.redArea} {...clickProps(handleRedClick)}>
          <div
            id="green"
            style={styles.greenArea}
            {...clickProps(handleGreenClick)}
          >
            <div
              id="blue"
              style={styles.blueArea}
              {...clickProps(handleBlueClick)}
            />
          </div>
        </div>

        <div style={styles.flex1}>
          {redClicked && <div style={styles.redText}>RED</div>}
          {greenClicked && <div style={styles.greenText}>GREEN</div>}
          {blueClicked && <div style={styles.blueText}>BLUE</div>}
        </div>

        <ul style={styles.flex1}>
          {path?.map((element, index) => {
            const { nodeName, id } = element;
            return (
              <li key={index}>
                {nodeName ?? 'WINDOW'} {id && <b>#{id}</b>}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function getEventPhaseText(eventPhase) {
  switch (eventPhase) {
    case 1:
      return 'Capture';
    case 2:
      return 'Target';
    case 3:
      return 'Bubble';
    default:
      return null;
  }
}
