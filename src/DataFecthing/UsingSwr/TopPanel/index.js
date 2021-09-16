import Avatar from './Avatar';
import UserName from './UserName';
import LastUpdated from './LastUpdated';
import './index.css';

export default function TopPanel() {
  return (
    <div className="swr-top-panel">
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="user-name-container">
        <UserName />
      </div>
      <div className="last-updated-container">
        <LastUpdated />
      </div>
    </div>
  );
}
