import { useSWRConfig } from 'swr';
import { useAppContext } from '../../AppContext';
import { Button } from 'components/Button';

export default function RefreshAll() {
  const { userId } = useAppContext();
  const { mutate } = useSWRConfig();

  const handleClick = () => {
    mutate(`users/${userId}`);
    mutate(`todos?userId=${userId}`);
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
