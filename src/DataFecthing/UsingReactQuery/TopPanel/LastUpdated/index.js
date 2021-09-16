import { useLastUpdated } from '../../hooks/useLastUpdated';
import './index.css';

export default function LastUpdated() {
  const { data } = useLastUpdated();
  const formattedTime = data?.toLocaleTimeString() ?? '--';

  return (
    <div className="rq-last-updated">
      Last updated:
      <br />
      <strong>{formattedTime}</strong>
    </div>
  );
}
