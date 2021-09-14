import useSWR from 'swr';

export function useRequest(requestKey) {
  const { data, error } = useSWR(requestKey);

  return {
    loading: !data && !error,
    data,
    error,
  };
}
