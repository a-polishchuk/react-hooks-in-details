import { useState } from 'react';
import { Toolbar } from 'components/Toolbar';

function Emoji({ emoji }) {
  return <span style={{ fontSize: 64 }}>{emoji}</span>;
}

function EmojiOption({ value, selectedValue, onSelect }) {
  const style = {
    opacity: value === selectedValue ? 1 : 0.5,
    textShadow: value === selectedValue ? '2px 2px #e1ccff' : '',
    cursor: 'default',
  };
  return (
    <span style={style} onClick={() => onSelect(value)}>
      <Emoji emoji={value} />
    </span>
  );
}

function RockScissorsPaperInput({ currentValue, onChange }) {
  return (
    <>
      <EmojiOption
        value={'✊'}
        selectedValue={currentValue}
        onSelect={onChange}
      />
      <EmojiOption
        value={'✌️'}
        selectedValue={currentValue}
        onSelect={onChange}
      />
      <EmojiOption
        value={'✋'}
        selectedValue={currentValue}
        onSelect={onChange}
      />
    </>
  );
}

export function RockScissorsPaper() {
  const [currentValue, setCurrentValue] = useState('✊');

  return (
    <>
      <h2>Chapter 8. Controlled vs uncontrolled</h2>
      <h3>Rock Scissors Paper</h3>
      <Toolbar>
        <RockScissorsPaperInput
          currentValue={currentValue}
          onChange={setCurrentValue}
        />
      </Toolbar>
      <Toolbar>
        Current value: <Emoji emoji={currentValue} />
      </Toolbar>
    </>
  );
}
