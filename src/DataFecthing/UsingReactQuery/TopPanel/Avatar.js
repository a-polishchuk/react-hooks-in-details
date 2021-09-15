import { useUser } from '../hooks/useUser';

export default function Avatar() {
  const { data } = useUser();
  const userName = data?.name ?? '';

  const initials = userName
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');

  return <div className="avatar">{initials}</div>;
}
