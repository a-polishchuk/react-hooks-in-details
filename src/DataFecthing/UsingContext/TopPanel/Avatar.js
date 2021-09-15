import { useUserContext } from '../UserContext';
import './index.css';

export default function Avatar() {
  const { data } = useUserContext();
  const initials = data.name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');

  return <div className="avatar">{initials}</div>;
}
