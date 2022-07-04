import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './AppContext';
import { TopPanel } from './TopPanel';
import { Profile } from './Profile';
import { TodoList } from './TodoList';

const queryClient = new QueryClient();

// NOTE: should be a default export in order to use dynamic import
export default function UsingReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <TopPanel />
        <Profile />
        <TodoList />
      </AppContextProvider>
    </QueryClientProvider>
  );
}
