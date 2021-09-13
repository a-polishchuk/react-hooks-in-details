import { useUserContext } from '../UserContext';
import './index.css';

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');
  return <div className="avatar">{initials}</div>;
}

function TopPanel() {
  const { loading, data } = useUserContext();

  if (loading) {
    return <div className="top-panel">Loading...</div>;
  }

  return (
    <div className="top-panel">
      <Avatar name={data.name} />
      <span>{data.name}</span>
    </div>
  );
}

export default TopPanel;
