import { UserContextProvider } from './UserContext';
import TopPanel from './TopPanel';
import Profile from './Profile';

const USER_ID = 1;

export default function UsingContext() {
  return (
    <UserContextProvider userId={USER_ID}>
      <TopPanel />
      <Profile />
    </UserContextProvider>
  );
}
