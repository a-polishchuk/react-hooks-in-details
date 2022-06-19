import { useAnimatedText } from '6-HooksCollection/Chapter-23/useAnimatedText';

import { AlienMessage } from './AlienMessage';

export function DotsMessage({ color }) {
  const dotsText = useAnimatedText('...', 400);

  return (
    <AlienMessage
      color={color}
      message={{
        text: `.${dotsText}`,
      }}
    />
  );
}
