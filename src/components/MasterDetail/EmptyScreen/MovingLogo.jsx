import { ReactLogo } from 'components/ReactLogo';
import { memo, useRef } from 'react';
import { getRandomColor } from 'utils/getRandomColor';
import { getRandomNumber } from 'utils/getRandomNumber';

export const MovingLogo = memo(({ left, top, duration }) => {
  const rotationRef = useRef(0);

  const style = {
    position: 'absolute',
    transition: `all ${duration}s linear`,
    transform: `translate(-50%, -50%) rotate(${rotationRef.current}deg)`,
    left,
    top,
  };
  const opacity = getRandomNumber(1, 4) * 10;
  const color = getRandomColor() + opacity.toFixed(0);

  rotationRef.current = rotationRef.current === 0 ? 360 : 0;

  return (
    <ReactLogo size={getRandomNumber(100, 360)} color={color} style={style} />
  );
});
