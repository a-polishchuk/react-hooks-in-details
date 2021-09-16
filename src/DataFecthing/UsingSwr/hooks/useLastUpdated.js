import useSWR from 'swr';

function fetchLastUpdated() {
  return new Promise((resolve) => {
    resolve(new Date());
  });
}

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
