import { useAppContext } from '../AppContext';
import { useRequest } from './useRequest';

export function useUser() {
  const { userId } = useAppContext();
  return useRequest(`users/${userId}`);
}
