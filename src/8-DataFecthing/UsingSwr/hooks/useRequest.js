import useSWR from 'swr';

export function useRequest(requestKey) {
  const { data, error, mutate } = useSWR(requestKey);

  return {
    loading: !data && !error,
    data,
    error,
    mutate,
  };
}
