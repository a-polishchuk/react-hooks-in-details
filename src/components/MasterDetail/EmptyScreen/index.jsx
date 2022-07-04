import '../MasterDetail.css';

import { v4 as uuidv4 } from 'uuid';
import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { useMemo, useState } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

import { Background } from './Background';
import { AlienMessage } from './AlienMessage';
import { DotsMessage } from './DotsMessage';

const MESSAGES = [
  'Greetings, human!',
  'Welcome to the "React Hooks in details" course',
  'Please select some chapter in the left menu',
];

function useDotsVisible() {
  const [dotsVisible, setDotsVisible] = useState(false);
  useInterval(() => {
    setDotsVisible((value) => !value);
  }, 3000);
  return dotsVisible;
}

export function EmptyScreen() {
  const isDotsVisible = useDotsVisible();

  const messageColor = useMemo(() => getRandomColor(), []);

  const messages = useMemo(
    () =>
      MESSAGES.map((text) => ({
        id: uuidv4(),
        text,
        dateTime: new Date(),
      })),
    []
  );

  return (
    <div className="empty-screen">
      <Background logosNumber={3} />
      <div className="empty-screen-messages">
        {messages.map((message) => (
          <AlienMessage
            key={message.id}
            color={messageColor}
            message={message}
          />
        ))}
        {isDotsVisible && <DotsMessage color={messageColor} />}
      </div>
    </div>
  );
}
