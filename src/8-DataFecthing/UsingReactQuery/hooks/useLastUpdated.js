import { useQuery } from 'react-query';

function fetchLastUpdated() {
  return new Promise((resolve) => {
    resolve(new Date());
  });
}

const OPTIONS = {
  refetchInterval: 3000,
};

export function useLastUpdated() {
  const { isLoading, data, error } = useQuery(
    'lastUpdated',
    fetchLastUpdated,
    OPTIONS
  );

  return {
    loading: isLoading,
    data,
    error,
  };
}
