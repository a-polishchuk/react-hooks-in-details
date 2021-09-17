import { useUserContext } from '../../UserContext';
import './index.css';

export default function Avatar() {
  const { data } = useUserContext();
  const userName = data?.name ?? '';

  const initials = userName
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');

  return <div className="dfc-avatar">{initials}</div>;
}
