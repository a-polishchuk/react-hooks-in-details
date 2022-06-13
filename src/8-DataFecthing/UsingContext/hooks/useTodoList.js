import { useRequest } from './useRequest';

export function useTodoList(userId) {
  return useRequest(`todos?userId=${userId}`);
}
