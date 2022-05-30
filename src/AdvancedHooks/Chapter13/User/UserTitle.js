import { useUser } from './UserContext';

const style = {
  fontFamily: 'monospace',
  fontSize: 24,
  margin: 10,
};

export function UserTitle() {
  const { firstName, middleName, lastName } = useUser();

  return <span style={style}>{`${firstName} ${middleName} ${lastName}`}</span>;
}
