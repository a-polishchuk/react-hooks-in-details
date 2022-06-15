import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { ColoredBlock } from 'components/ColoredBlock';
import { useRerender } from 'hooks/useRerender';
import './MasterDetail.css';

function AlienMessage({ text }) {
  const blockStyle = {
    padding: 10,
    borderRadius: 20,
    display: 'flex',
  };
  return (
    <div className="empty-screen-message">
      <div className="empty-screen-avatar">👽</div>
      <ColoredBlock style={blockStyle}>{text}</ColoredBlock>
    </div>
  );
}

export function EmptyScreen() {
  const rerender = useRerender();

  useInterval(rerender, 3000);

  return (
    <div className="empty-screen">
      <div className="empty-screen-messages">
        <AlienMessage text="Greetings, human!" />
        <AlienMessage text="Welcome to the 'React Hooks in details' course" />
        <AlienMessage text="Select chapter in the left menu" />
      </div>
    </div>
  );
}
