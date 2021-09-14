import { useUser } from '../hooks/useUser';
import { useLastUpdated } from '../hooks/useLastUpdated';
import './index.css';

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');
  return <div className="avatar">{initials}</div>;
}

function LastUpdated() {
  const { data } = useLastUpdated();
  return (
    <div className="last-updated">
      Last updated:
      <br />
      <strong>{data?.toLocaleTimeString()}</strong>
    </div>
  );
}

function TopPanel({ userId }) {
  const { loading, data } = useUser(userId);

  if (loading) {
    return <div className="top-panel">Loading...</div>;
  }

  return (
    <div className="top-panel">
      <Avatar name={data.name} />
      <div className="user-name">{data.name}</div>
      <LastUpdated />
    </div>
  );
}

export default TopPanel;
