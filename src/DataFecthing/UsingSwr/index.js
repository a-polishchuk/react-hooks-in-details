import { SWRConfig } from 'swr';
import { fetcher } from './hooks/fetcher';
import TopPanel from './TopPanel';
import Profile from './Profile';

const USER_ID = 2;

const SWR_CONFIG = {
  fetcher,
  // refreshInterval: 3000, // refetch data every 3 seconds
};

export default function UsingSwr() {
  return (
    <SWRConfig value={SWR_CONFIG}>
      <TopPanel userId={USER_ID} />
      <Profile userId={USER_ID} />
    </SWRConfig>
  );
}
