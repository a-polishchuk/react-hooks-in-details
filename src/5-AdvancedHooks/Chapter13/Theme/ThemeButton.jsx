import { useState } from 'react';
import { useCurrentTheme } from './ThemeContext';

function buildStyle(theme, pressed, disabled) {
  const { primaryColor, secondaryColor } = theme;
  const primary = pressed ? secondaryColor : primaryColor;
  const secondary = pressed ? primaryColor : secondaryColor;
  return {
    backgroundColor: secondary,
    border: `1px solid ${primary}`,
    color: primary,
    textShadow: '1px 1px white',
    padding: '10px 20px',
    fontWeight: 600,
    opacity: disabled ? 0.4 : 1,
  };
}

export function ThemeButton({ text, onClick, disabled = false }) {
  const theme = useCurrentTheme();
  const [pressed, setPressed] = useState(false);

  const onMouseDown = () => setPressed(true);
  const onMouseUp = () => setPressed(false);

  return (
    <button
      style={buildStyle(theme, pressed, disabled)}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {text}
    </button>
  );
}
