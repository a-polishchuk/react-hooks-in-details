import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import format from 'date-fns/format';
import './Console.css';

export function Console() {
  const [messages, setMessages] = useState([]);
  const footer = useRef();

  useEffect(() => {
    console.log = (message) => {
      const text =
        typeof message == 'object' ? JSON.stringify(message) : message;

      const newMessage = {
        id: uuidv4(),
        text,
        timestamp: new Date().getTime(),
      };

      setMessages((prev) => [...prev, newMessage]);
    };
  }, []);

  useEffect(() => {
    footer.current?.scrollIntoView();
  }, [messages]);

  const clear = () => {
    setMessages([]);
  };

  return (
    <div className="console-container">
      <button className="console-clear" onClick={clear}>
        Clear
      </button>
      <div className="console-scroll">
        {messages.map(({ id, timestamp, text }) => (
          <div key={id}>
            <span className="console-timestamp">
              [{format(timestamp, 'HH:mm:ss')}]
            </span>{' '}
            {text}
          </div>
        ))}
        <div ref={footer} className="console-footer" />
      </div>
    </div>
  );
}
