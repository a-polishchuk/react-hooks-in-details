import { useRequest } from './useRequest';
import { useAppContext } from '../AppContext';

export function useUser() {
  const { userId } = useAppContext();

  return useRequest(`users/${userId}`);
}
