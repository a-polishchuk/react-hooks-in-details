import { useUser } from '../../hooks/useUser';
import './index.css';

function useUserInitials() {
  const { data } = useUser();
  const userName = data?.name ?? '';

  return userName
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');
}

export default function Avatar() {
  const initials = useUserInitials();

  return <div className="rq-avatar">{initials}</div>;
}
