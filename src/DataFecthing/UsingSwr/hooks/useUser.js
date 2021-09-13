import useSWR from 'swr';
import { fetcher } from './fetcher';

export function useUser(userId) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher
  );

  return {
    loading: !data && !error,
    data,
    error,
  };
}
