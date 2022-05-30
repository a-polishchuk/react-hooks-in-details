import { Toolbar } from 'components/Toolbar';
import { useState } from 'react';

import { AnimatedEmoji } from './AnimatedEmoji';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = [
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
];

const DEFAULT_DELAY = 500;
const MIN_DELAY = 100;

function EmojiSection({ emojis }) {
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const handleDelayChange = (event) => {
    const stringValue = event.target.value || '0';
    setDelay(Math.max(parseInt(stringValue), MIN_DELAY));
  };
  return (
    <Toolbar>
      <AnimatedEmoji emojis={emojis} delay={delay} fontSize={64} />
      <input type="number" value={delay} onChange={handleDelayChange} />
    </Toolbar>
  );
}

export function UseEffectAndInterval() {
  return (
    <>
      <h2>Chapter 6. useEffect</h2>
      <h3>useEffect + setInterval</h3>

      <EmojiSection emojis={MOON_EMOJIS} />
      <EmojiSection emojis={EARTH_EMOJIS} />
      <EmojiSection emojis={CLOCK_EMOJIS} />
    </>
  );
}
