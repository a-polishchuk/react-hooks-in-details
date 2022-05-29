import { useState, useEffect } from 'react';

export function AnimatedEmoji({ emojis, fontSize, delay }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((value) => {
        const newValue = value + 1;
        return newValue === emojis.length ? 0 : newValue;
      });
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [delay, emojis.length]);

  return <div style={{ fontSize }}>{emojis[currentIndex]}</div>;
}
