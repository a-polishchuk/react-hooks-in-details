import { useQuery } from 'react-query';
import { queryFunction } from '../api';

export function useRequest(queryKey) {
  const { isLoading, data, error } = useQuery(queryKey, queryFunction);

  return {
    loading: isLoading,
    data,
    error,
  };
}
