import { Avatar } from './Avatar';
import './FamilyMember.css';

export function FamilyMember({ name, children }) {
  return (
    <div className="member-container">
      <Avatar name={name} />
      {children ? <div className="member-children">{children}</div> : null}
    </div>
  );
}
