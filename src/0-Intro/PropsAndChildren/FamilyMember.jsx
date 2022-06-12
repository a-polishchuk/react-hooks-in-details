import { getRandomColor } from 'utils/getRandomColor';
import { Avatar } from './Avatar';
import './FamilyMember.css';

export function FamilyMember({ name, children }) {
  const containerStyle = {
    backgroundColor: getRandomColor() + '11',
  };
  return (
    <div className="member-container" style={containerStyle}>
      <Avatar name={name} />
      {children ? <div className="member-children">{children}</div> : null}
    </div>
  );
}
