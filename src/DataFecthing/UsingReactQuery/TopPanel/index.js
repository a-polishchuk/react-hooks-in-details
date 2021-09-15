import { useUser } from '../hooks/useUser';
import Avatar from './Avatar';
import './index.css';

export default function TopPanel() {
  const { loading, data } = useUser();

  if (loading) {
    return <div className="top-panel">Loading...</div>;
  }

  return (
    <div className="top-panel">
      <Avatar />
      <span>{data.name}</span>
    </div>
  );
}
