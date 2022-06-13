import { UserContextProvider } from './UserContext';
import { TodoContextProvider } from './TodoContext';
import TopPanel from './TopPanel';
import Profile from './Profile';
import TodoList from './TodoList';

const USER_ID = 1;

export default function UsingContext() {
  return (
    <UserContextProvider userId={USER_ID}>
      <TodoContextProvider userId={USER_ID}>
        <TopPanel />
        <Profile />
        <TodoList />
      </TodoContextProvider>
    </UserContextProvider>
  );
}
