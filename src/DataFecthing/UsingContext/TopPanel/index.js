import { useUserContext } from '../UserContext';
import Avatar from './Avatar';
import './index.css';

export default function TopPanel() {
  const { loading, data } = useUserContext();

  if (loading) {
    return <div className="dfc-top-panel">Loading...</div>;
  }

  return (
    <div className="dfc-top-panel">
      <Avatar />
      <span>{data.name}</span>
    </div>
  );
}
