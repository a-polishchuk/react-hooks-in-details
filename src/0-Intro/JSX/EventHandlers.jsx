import { useRerender } from 'hooks/useRerender';
import { ColoredBlock } from 'components/ColoredBlock';

const STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function EventHandlers() {
  const rerender = useRerender();

  const eventHandler = () => {
    rerender();
  };

  return (
    <>
      <h2>Introduction to JSX</h2>
      <h3>Adding event handlers</h3>
      <ColoredBlock
        style={STYLE}
        onClick={eventHandler}
        onMouseEnter={eventHandler}
        onMouseLeave={eventHandler}
      >
        Click me!
      </ColoredBlock>
    </>
  );
}
