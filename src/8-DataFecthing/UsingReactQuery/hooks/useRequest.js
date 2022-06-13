import { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { queryFunction } from '../api';

export function useRequest(queryKey) {
  const { isLoading, data, error } = useQuery(queryKey, queryFunction);
  const queryClient = useQueryClient();

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryClient, queryKey]);

  return {
    loading: isLoading,
    data,
    error,
    invalidate,
  };
}
