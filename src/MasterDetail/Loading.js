import { useAnimatedText } from 'HooksCollection/Chapter-23/useAnimatedText';

const style = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '48px',
};

export default function Loading() {
  const animatedText = useAnimatedText('.....', 200);

  return <div style={style}>{animatedText}</div>;
}
