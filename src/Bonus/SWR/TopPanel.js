import useSWR from 'swr';
import { fetcher } from './fetcher';
import './TopPanel.css';

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');
  return <div className="avatar">{initials}</div>;
}

function TopPanel({ userId }) {
  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher
  );

  if (!data) {
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
