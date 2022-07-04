import { SWRConfig } from 'swr';
import { fetcher } from './api/fetcher';
import { AppContextProvider } from './AppContext';
import { TopPanel } from './TopPanel';
import { Profile } from './Profile';
import { TodoList } from './TodoList';

const SWR_CONFIG = {
  fetcher,
};

// NOTE: should be a default export in order to use dynamic import
export default function UsingSwr() {
  return (
    <AppContextProvider>
      <SWRConfig value={SWR_CONFIG}>
        <TopPanel />
        <Profile />
        <TodoList />
      </SWRConfig>
    </AppContextProvider>
  );
}
