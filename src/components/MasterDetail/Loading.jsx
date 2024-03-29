import { useAnimatedText } from '6-HooksCollection/Chapter-23/useAnimatedText';
import './MasterDetail.css';

export function Loading() {
  const animatedText = useAnimatedText('.....', 200);

  return <div className="loading">{animatedText}</div>;
}
