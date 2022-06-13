import { useReducer } from 'react';
import { Toolbar } from 'components/Toolbar';

function toggle(state) {
  return !state;
}

function useToggle(initialValue) {
  return useReducer(toggle, initialValue);
}

function EmojiToggle({ emojiOn, emojiOff, value, toggle }) {
  return (
    <div
      style={{ fontSize: 64, cursor: 'pointer', userSelect: 'none' }}
      onClick={() => toggle()}
    >
      {value ? emojiOn : emojiOff}
    </div>
  );
}

export function UseToggleReducer() {
  const [isHappy, toggleHappy] = useToggle(true);
  const [isOk, toggleOk] = useToggle(true);
  const [isDay, toggleDay] = useToggle(false);

  return (
    <>
      <h2>14. useReducer</h2>
      <h3>useToggle</h3>

      <Toolbar>
        <EmojiToggle
          emojiOn="😊"
          emojiOff="😢"
          value={isHappy}
          toggle={toggleHappy}
        />
        <EmojiToggle
          emojiOn="👍"
          emojiOff="👎"
          value={isOk}
          toggle={toggleOk}
        />
        <EmojiToggle
          emojiOn="🌞"
          emojiOff="🌚"
          value={isDay}
          toggle={toggleDay}
        />
      </Toolbar>
    </>
  );
}
