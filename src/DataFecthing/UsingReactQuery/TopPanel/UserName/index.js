import { useUser } from '../../hooks/useUser';
import './index.css';

export default function UserName() {
  const { data } = useUser();

  return (
    <div>
      <div className="user-name">{data?.name}</div>
      <div className="user-name-email">{data?.email}</div>
    </div>
  );
}
