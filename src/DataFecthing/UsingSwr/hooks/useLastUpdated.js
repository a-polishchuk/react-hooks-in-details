import useSWR from 'swr';
import { fetchLastUpdated } from './fetchLastUpdated';

const SWR_CONFIG = {
  refreshInterval: 3000,
};

export function useLastUpdated() {
  const { data, error } = useSWR('lastUpdated', fetchLastUpdated, SWR_CONFIG);

  return {
    loading: !data && !error,
    data,
    error,
  };
}
