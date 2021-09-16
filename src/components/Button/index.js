import { useState } from 'react';
import { getStyle } from './styles';

function Button({ text, onClick, disabled = false }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const style = getStyle(disabled, hovered, pressed);

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default Button;
