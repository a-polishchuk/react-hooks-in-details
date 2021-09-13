import useSWR from 'swr';

export function useUser(userId) {
  const { data, error } = useSWR(`users/${userId}`);

  return {
    loading: !data && !error,
    data,
    error,
  };
}
