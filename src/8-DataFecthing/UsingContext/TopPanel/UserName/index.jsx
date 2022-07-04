import { useUserContext } from '8-DataFecthing/UsingContext/UserContext';
import './index.css';

export function UserName() {
  const { data } = useUserContext();

  return (
    <>
      <div className="dfc-user-name">{data?.name}</div>
      <div className="dfc-user-name-email">{data?.email}</div>
    </>
  );
}
