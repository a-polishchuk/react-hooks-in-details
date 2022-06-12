import './Avatar.css';

export function Avatar({ name }) {
  return (
    <div className="member-avatar-container">
      <img
        alt="Cat"
        src={`https://cataas.com/cat?${name}`}
        className="member-avatar-image"
      />
      <div className="member-avatar-caption">{name}</div>
    </div>
  );
}
