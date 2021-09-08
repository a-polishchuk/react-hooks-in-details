import { useEffect, useState } from 'react';

export function useAnimatedText(text, delayMs) {
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setCurrentPos((pos) => {
        const isLast = pos === text.length - 1;
        return isLast ? 0 : pos + 1;
      });
    }, delayMs);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [text, delayMs]);

  return text.substring(0, currentPos);
}
