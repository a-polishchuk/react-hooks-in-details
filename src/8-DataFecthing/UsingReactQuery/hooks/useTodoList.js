import { useAppContext } from '../AppContext';
import { useRequest } from './useRequest';

export function useTodoList() {
  const { userId } = useAppContext();
  return useRequest(`todos?userId=${userId}`);
}
