import { useRequest } from './useRequest';

export function useUser(userId) {
  return useRequest(`users/${userId}`);
}
