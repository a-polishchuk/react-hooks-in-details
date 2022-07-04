import './BrownianMotion.css';

import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { ReactLogo } from 'components/ReactLogo';
import { useRerender } from 'hooks/useRerender';
import { getRandomArrayElement } from 'utils/getRandomArrayElement';
import { getRandomNumber } from 'utils/getRandomNumber';

const DURATION = 10;
const MONOKAI_PALETTE = [
  '#66CCE1',
  '#FF5794',
  '#CC8D66',
  '#FAA23D',
  '#B2E64C',
  '#5596F1',
  '#AA7DFC',
];

function getLogoStyle(left, top) {
  return {
    position: 'absolute',
    transition: `all ${DURATION}s linear`,
    opacity: getRandomNumber(0.3, 0.8),
    transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
    left,
    top,
  };
}

function buildLogos() {
  const logos = [];
  for (let i = 0; i < 10; i++) {
    const left = `${getRandomNumber(10, 90)}%`;
    const top = `${getRandomNumber(10, 90)}%`;
    logos.push(
      <ReactLogo
        key={i}
        size={getRandomNumber(30, 200)}
        color={getRandomArrayElement(MONOKAI_PALETTE) + '99'}
        style={getLogoStyle(left, top)}
      />
    );
  }
  return logos;
}

export function BrownianMotion() {
  const rerender = useRerender();

  useInterval(rerender, DURATION * 1000);

  return <div className="brownian-motion-container">{buildLogos()}</div>;
}
