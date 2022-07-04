import { Button } from 'components/Button';
import { useSWRConfig } from 'swr';

import { useAppContext } from '../../AppContext';

export function RefreshAll() {
  const { userId } = useAppContext();
  const { mutate } = useSWRConfig();

  const handleClick = () => {
    mutate(`users/${userId}`);
    mutate(`todos?userId=${userId}`);
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
