import { UserContext } from './UserContext';
import { UserTitle } from './UserTitle';
import { UserAvatar } from './UserAvatar';

const style = {
  padding: 10,
  borderWidth: 2,
  border: '2px dashed #DDDDDD',
};

const user = {
  firstName: 'Jack',
  middleName: 'the',
  lastName: 'Cat',
  avatarUrl: 'https://cataas.com/cat',
};

export function UserPanel() {
  return (
    <div style={style}>
      <UserContext.Provider value={user}>
        <UserAvatar />
        <br />
        <UserTitle />
      </UserContext.Provider>
    </div>
  );
}
