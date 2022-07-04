import { Avatar } from './Avatar';
import { UserName } from './UserName';
import { TodoCounter } from './TodoCounter';
import { LastUpdated } from './LastUpdated';
import { RefreshAll } from './RefreshAll';
import './index.css';

export function TopPanel() {
  return (
    <div className="swr-top-panel">
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="user-name-container">
        <UserName />
      </div>
      <div className="widget-container">
        <TodoCounter />
      </div>
      <div className="widget-container">
        <LastUpdated />
      </div>
      <div className="widget-container">
        <RefreshAll />
      </div>
    </div>
  );
}
