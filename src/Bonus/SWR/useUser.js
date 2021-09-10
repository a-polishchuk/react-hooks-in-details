import useSWR from 'swr';
import { fetcher } from './fetcher';
import { fetchMockUserData } from './fetchMockUserData';

export function useUser(userId) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetchMockUserData
  );

  return {
    loading: !data && !error,
    data,
    error,
  };
}
