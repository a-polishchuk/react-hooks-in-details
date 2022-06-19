import '../MasterDetail.css';

import { format } from 'date-fns';
import { ColoredBlock } from 'components/ColoredBlock';

const TIME_FORMAT = 'HH:mm';

function buildAvatarStyle(color) {
  return {
    textShadow: `2px 2px ${color + '66'}`,
  };
}

function buildBlockStyle(backgroundColor) {
  return {
    display: 'flex',
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    minWidth: 50,
    backgroundColor,
  };
}

export function AlienMessage({ color, message }) {
  const { text, dateTime } = message;
  return (
    <div className="empty-screen-message">
      <div className="empty-screen-avatar" style={buildAvatarStyle(color)}>
        👽
      </div>
      <ColoredBlock style={buildBlockStyle(color)}>{text}</ColoredBlock>
      {dateTime && (
        <div className="empty-screen-timestamp">
          {format(dateTime, TIME_FORMAT)}
        </div>
      )}
    </div>
  );
}
