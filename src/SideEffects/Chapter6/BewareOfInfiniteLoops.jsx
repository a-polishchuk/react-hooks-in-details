import { useEffect, useState } from 'react';
import { Toolbar } from 'components/Toolbar';

import './EffectsAreNotEffective.css';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨'];

export function BewareOfInfiniteLoops() {
  const [topEmojis, setTopEmojis] = useState(EMOJIS);
  const [bottomEmojis, setBottomEmojis] = useState([]);

  const addToBottom = (emoji) => {
    setBottomEmojis((array) => [...array, emoji]);
  };

  const addToTop = (emoji) => {
    setTopEmojis((array) => [...array, emoji]);
  };

  // FIXME: these two effects will trigger an infinite update loop
  useEffect(() => {
    setTopEmojis((array) =>
      array.filter((emoji) => !bottomEmojis.includes(emoji))
    );
  }, [bottomEmojis]);

  useEffect(() => {
    setBottomEmojis((array) =>
      array.filter((emoji) => !topEmojis.includes(emoji))
    );
  }, [topEmojis]);

  return (
    <>
      <h2>Chapter 6. useEffect</h2>
      <h3>Beware of infinite loops</h3>

      <Toolbar>
        {topEmojis.map((emoji) => (
          <div
            key={emoji}
            className="animal-emoji"
            onClick={() => addToBottom(emoji)}
          >
            {emoji}
          </div>
        ))}
      </Toolbar>

      <Toolbar>
        {bottomEmojis.map((emoji) => (
          <div
            key={emoji}
            className="animal-emoji"
            onClick={() => addToTop(emoji)}
          >
            {emoji}
          </div>
        ))}
      </Toolbar>
    </>
  );
}
