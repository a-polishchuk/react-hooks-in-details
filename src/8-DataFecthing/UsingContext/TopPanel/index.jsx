import { Avatar } from './Avatar';
import { UserName } from './UserName';
import { TodoCounter } from './TodoCounter';
import './index.css';

export function TopPanel() {
  return (
    <div className="dfc-top-panel">
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="user-name-container">
        <UserName />
      </div>
      <div className="todo-counter-container">
        <TodoCounter />
      </div>
    </div>
  );
}
