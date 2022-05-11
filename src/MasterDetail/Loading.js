import { useAnimatedText } from 'HooksCollection/Chapter-23/useAnimatedText';
import './MasterDetail.css';

export default function Loading() {
  const animatedText = useAnimatedText('.....', 200);

  return <div className="loading">{animatedText}</div>;
}
