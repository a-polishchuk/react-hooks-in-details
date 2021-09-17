import { useQueryClient } from 'react-query';
import Button from 'components/Button';

export default function RefreshAll() {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.invalidateQueries();
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
