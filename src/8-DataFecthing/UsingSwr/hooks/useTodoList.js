import { useRequest } from './useRequest';
import { useAppContext } from '../AppContext';

export function useTodoList() {
  const { userId } = useAppContext();

  return useRequest(`todos?userId=${userId}`);
}
